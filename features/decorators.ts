class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boat colour is ${this.color}`;
  }

  @logError('Something happened')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    if (speed == 'fast') {
      console.log('swish');
    } else {
      console.log('slow');
    }
  }
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}
function testDecorator(target: any, key: string) {
  console.log(target.color);
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.log(errorMessage);
      }
    };
  };
}
