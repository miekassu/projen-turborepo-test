import { Hello as Hello2 } from 'sub-project-2';

export class Hello {
  hello2 = Hello2;

  public sayHello() {
    return 'hello, world!';
  }
}