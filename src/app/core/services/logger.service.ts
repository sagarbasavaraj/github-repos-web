import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  // log message to console (in case of development) or push to server (keep it in local storage and pump to server every 15 seconds or something)
  log(logDescrptor: { message: string; type: string }) {
    console.log(logDescrptor?.message);
  }

  info(message: string) {
    this.log({ message, type: 'INFO' });
  }

  error(message: string) {
    this.log({ message, type: 'ERROR' });
  }

  warn(message: string) {
    this.log({ message, type: 'WARN' });
  }
}
