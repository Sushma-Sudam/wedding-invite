import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wedding-invite',
  templateUrl: './wedding-invite.component.html',
  styleUrl: './wedding-invite.component.css'
})
export class WeddingInviteComponent {
  @Output() close = new EventEmitter<void>();
  
  closeInvite(){
    this.close.emit();
  }

}
