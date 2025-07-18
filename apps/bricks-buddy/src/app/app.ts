import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '@micclo-tm/feature'

@Component({
  imports: [RouterModule, Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'bricks-buddy';
}
