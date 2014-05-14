public class ErankyunTiv {
    public int numberValue=0;
    public int numberDivisor;
    public ErankyunTiv(){
    }
    public void erankyunNumber(int number) {
        numberValue = numberValue +number;
    }
    public void divisor(int numberValue, int i){
        numberDivisor=numberValue%i;
    }
}
