import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'maia-mis-15';
  isPause = true
  private audio: HTMLAudioElement;

	constructor() {
		this.audio = new Audio('assets/song/song.mp3');
	}

  playMusic() {
		if (this.isPause) {
			this.audio.play();
		} else {
			this.audio.pause();
		}
		this.isPause = !this.isPause;
	}

  copy(event: MouseEvent) {
		// Obtener el elemento padre del ícono de copia (el elemento <p>)
		const pElement = (event.target as HTMLElement).closest('p');
		
		if (pElement) {
			// Obtener el texto del elemento <p>
			const textToCopy = pElement.innerText;
			
			const textarea = document.createElement('textarea');
			textarea.value = textToCopy;
			document.body.appendChild(textarea);
			textarea.select();

			try {
				const successful = document.execCommand('copy');
				if (successful) {
					pElement.classList.remove('bg-slate-200');
					pElement.classList.add('bg-green-200');
				} else {
					console.error('Error al copiar el texto');
				}
			} catch (error) {
				console.error('Error al copiar el texto:', error);
			}
			
			// Eliminar el textarea temporal
			document.body.removeChild(textarea);
		} else {
			alert('No se encontró el elemento para copiar.');
		}
	}

	openwhatsapp() {
		window.open('https://wa.me/+5493815585823?text=Hola%20quiero%20confirmar%20mi%20asistencia%20al%2015%20de%20Maia.');
	}

	salonMap() {
		window.open('https://maps.app.goo.gl/oDMJWASmpfomwMxv8');
	}

	iglesiaMap() {
		window.open('https://maps.app.goo.gl/Qp2Lxc3qaj19HUWT7');
	}
}