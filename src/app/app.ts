import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  encendido = signal<boolean>(true);
  colorActual = signal<'rojo' | 'amarillo' | 'verde'>('rojo');

  mensajeRojo = signal<string>('El rojo es para frenar');
  mensajeAmarillo = signal<string>('el amarillo por que va a cambiar');
  mensajeVerde = signal<string>('El verde es para avanzar');
  mensajeActual = signal<string>(this.mensajeRojo());

  cambiarColor() {
    if (!this.encendido()) return;

    const color = this.colorActual();
    if (color === 'rojo') {
      this.colorActual.set('amarillo');
      this.mensajeActual.set(this.mensajeAmarillo());
    } else if (color === 'amarillo') {
      this.colorActual.set('verde');
      this.mensajeActual.set(this.mensajeVerde());
    } else {
      this.colorActual.set('rojo');
      this.mensajeActual.set(this.mensajeRojo());
    }
  }

  encender() {
    this.encendido.set(!this.encendido());

    if (!this.encendido()) {
      this.mensajeActual.set('El semáforo se apago.');
    } else {
      if (this.colorActual() === 'rojo')
        this.mensajeActual.set(this.mensajeRojo());
      if (this.colorActual() === 'amarillo')
        this.mensajeActual.set(this.mensajeAmarillo());
      if (this.colorActual() === 'verde')
        this.mensajeActual.set(this.mensajeVerde());
    }
  }
}
