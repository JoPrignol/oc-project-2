import { Component, OnInit, OnDestroy } from '@angular/core';
import { OlympicService } from '../core/services/olympic.service';
import { Router } from '@angular/router';
import { MedalsPerCountry } from '../core/models/MedalsPerCountry';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit, OnDestroy{

  medalsPerCountry: MedalsPerCountry[] = [];
  numberOfJOs: number = 0;
  numberOfCountries: number = 0;

  isDataLoaded = false;

  private subscription: Subscription = new Subscription();

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {

    const olympicSubscription = this.olympicService.getOlympics().subscribe(data => {

      this.numberOfJOs = data[0].participations.length;
      this.numberOfCountries = data.length;

      data.forEach((element: {country: string, participations: Array<{medalsCount: number}>}) => {

        let country = element.country;

        let numberOfMedals = 0;

        element.participations.forEach((participation: {medalsCount: number}) => {
          numberOfMedals += participation.medalsCount;
        });
        this.medalsPerCountry.push({name: country, value: numberOfMedals});
      });
      this.isDataLoaded = true;
    });
    this.subscription.add(olympicSubscription);
  }

  onSelect(event: MedalsPerCountry): void {
    const countryName = event.name;

    this.router.navigate(['/country', countryName]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  customTooltipText(medal: {data : {name : string, value : number}}): string {
    return `${medal.data.name}<br> <i class="fa-solid fa-medal" style="color: #ffffff;"></i>${medal.data.value}`
  }
}
