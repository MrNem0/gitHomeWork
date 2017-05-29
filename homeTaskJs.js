class Fighter {
  constructor(name = 'Michael', power = 10, health = 100){
    this.name = name;
    this.power = power;
    this.health = health;
  }
  setDamage(damage = 0){
    this.health = this.health - damage;
    if (this.health > 0 ){
      console.log(`У ${this.name} залишилося: ${this.health} ХП`);
    }
  }
  hit(enemy, point){
    let damage = point * this.power;
    console.log(`${this.name} зробив удар, нанесено шкоди: ${damage}`);
    enemy.setDamage(damage);
  }
}

class ImprovedFighter extends Fighter {

  doubleHit(enemy, point){
    let doublePoint = point * 2
    super.hit(enemy, doublePoint)
  }
}

let fighter = new Fighter('Superman',5,100);
let improvedFighter = new ImprovedFighter('Batman',5, 100);

const fight = (fighter, improvedFighter, ...point) => {

  const went = () => {
    for (let i=0; i < point.length; i++){
      let hitPoint = point[i],
          flag = false;
      const fighting = () => {
          fighter.hit(improvedFighter, hitPoint);
          improvedFighter.doubleHit(fighter, hitPoint);
      };
        if (flag === true){
          flag = false;
          fighting();
          if(improvedFighter.health <= 0 ){
            console.log(`${improvedFighter.name} помер
${fighter.name} переміг`);
          break;
          }
        }else{
          flag = true;
          fighting();
          if(fighter.health <= 0 ){
            console.log(`${fighter.name} помер
${improvedFighter.name} переміг`);
          break;
          }
        }
      }
   };
   went();
 }


fight(fighter,improvedFighter,1,3,4)
