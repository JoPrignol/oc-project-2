import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OlympicService } from '../core/services/olympic.service';
import { Router } from '@angular/router';
import { Olympic } from '../core/models/Olympic';
import { ChartData } from '../core/models/ChartData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit, OnDestroy {

  countryName: string | null = '';

  isDataLoaded = false;

  chartData: ChartData[] = [];
  numberOfEntries: number = 0;
  totalNumberOfMedals: number = 0;
  totalNumberOfAthletes: number = 0;

  private subscription: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    this.countryName = this.route.snapshot.paramMap.get('name');

    const olympicSubscription = this.olympicService.getOlympics().subscribe((data: Olympic[]) => {

      if (data && data.length > 0) {
        const countryData = data.find(element => element.country === this.countryName);

        const numberOfEntries = countryData?.participations.length;
        this.numberOfEntries = numberOfEntries ?? 0;

        const totalNumberOfMedals = countryData?.participations.reduce(
          (accumulator, participation) => accumulator + participation.medalsCount, 0,
        );
        this.totalNumberOfMedals = totalNumberOfMedals ?? 0;

        const totalNumberOfAthletes = countryData?.participations.reduce(
          (accumulator, participation) => accumulator + participation.athleteCount, 0,
        );
        this.totalNumberOfAthletes = totalNumberOfAthletes ?? 0;

        const chartData = [{
          name: 'Medals',
          series: countryData?.participations.map((participation) => ({
            name: participation.year.toString(),
            value: participation.medalsCount
          })) ?? []
        }];

        this.chartData = chartData;

        this.isDataLoaded = true;
      }
    });

    this.subscription.add(olympicSubscription);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showXAxis = true;
  showYAxis = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Dates';
}
