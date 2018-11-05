class MyMap <T> {
  elements: any = {};
  setItem(key: string, item: T){
    this.elements[key] = item;
  }
  clear(){
    this.elements = {}
  }
  printMap(){
    for(let elem in this.elements){
      console.log('Key: ' + elem + ' Value: ' + this.elements[elem]);
    }
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();