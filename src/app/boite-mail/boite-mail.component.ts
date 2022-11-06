import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { RequeteService } from '../services/requete.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-boite-mail',
  templateUrl: './boite-mail.component.html',
  styleUrls: ['./boite-mail.component.scss'],
  providers: [MessageService],
})
export class BoiteMailComponent implements OnInit {
  FormData: FormGroup;
  repCapctha: string = '';

  constructor(
    private builder: FormBuilder,
    private requeteservice: RequeteService,
    private messageService: MessageService
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

  resetResultCaptcha() {
    this.repCapctha = '';
  }

  onSubmit() {
    this.requeteservice.sendMail(this.FormData.value).subscribe(
      (succes) => {
        this.messageService.add({severity:'success', summary:'Confirmation', detail:'Message bien envoyé !'});
      },
      (error) => {
        this.messageService.add({severity:'error', summary:'Erreur', detail:'Le message n\'a pas pu être envoyé !'});
      }
    );

    this.repCapctha = '';
    this.FormData.reset();
  }
}
