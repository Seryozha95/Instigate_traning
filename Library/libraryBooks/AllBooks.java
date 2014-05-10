import books.*;
public class AllBooks {
   public static void main(String[] args) {
    
           
           Books HarryPotter=new Books("sa", "xsa", "http:/tert.am", 1955, 60, 1);
// Link HarryPotter=new Link();
            String url = "http://tert.am";
             HarryPotter.openUrl(HarryPotter.url);
             HarryPotter.getbook();
             System.out.println(HarryPotter.name);

             
   }
}
