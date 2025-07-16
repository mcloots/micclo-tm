import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '@micclo-tm/feature';

@Component({
  imports: [Navbar, RouterModule],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'students-followup';
}
