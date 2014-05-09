import java.awt.Desktop;
import java.io.IOException;
import java.net.URI;
public class Link {
        public static void main(String[] args) {
                    String url = "http://www.google.com";
                    Runtime runtime = Runtime.getRuntime();
         try {
             runtime.exec("xdg-open " + url);
         }
         catch (IOException e) {
             e.printStackTrace();
         }
        }
}
