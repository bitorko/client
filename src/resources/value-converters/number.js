export class NumberValueConverter {
  /*
  toView() {
  }
  */

  fromView(value) {
    return value? Number(value) : value;
  }
}
