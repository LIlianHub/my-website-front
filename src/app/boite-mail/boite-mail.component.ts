import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RequeteService } from '../services/requete.service';

@Component({
  selector: 'app-boite-mail',
  templateUrl: './boite-mail.component.html',
  styleUrls: ['./boite-mail.component.scss'],
})
export class BoiteMailComponent implements OnInit {
  FormData: FormGroup;
  message!: string;
  repCapctha: string = "";

  constructor(
    private builder: FormBuilder,
    private requeteservice: RequeteService
  ) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      Sujet: new FormControl('', [Validators.required]),
      Email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      Comment: new FormControl('', [Validators.required]),
    });
  }

  showResponse(event: any) {
    this.repCapctha = event.response;
  }

  resetResultCaptcha(){
    this.repCapctha = "";
  }

  onSubmit() {
    this.requeteservice.sendMail(this.FormData.value).subscribe(
      (succes) => {
        this.message = 'Message Envoyé';
        console.log("coucou");
        console.log(succes);
      },
      (error) => {
        this.message = "Erreur lors de l'envoie du message";
        console.log(error);
      }
    );
    
    this.repCapctha = "";
    this.FormData.reset();    
  }
}
