public class ErankyunTiv {
    public int numberValue=0;
    public int numberDivisor;
    public ErankyunTiv(){
    }
    public int erankyunNumber(int number) {
        numberValue = numberValue +number;
        return numberValue;
    }
    public int divisor(int numberValue, int i){
        numberDivisor=numberValue%i;
        return numberDivisor;
    }
}
