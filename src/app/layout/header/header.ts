import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderActions } from "../header-actions/header-actions";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, HeaderActions],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
