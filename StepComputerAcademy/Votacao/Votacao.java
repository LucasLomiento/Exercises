import java.util.Scanner;

public class Votacao {

    public static void main(String[] args){

        Scanner teclado = new Scanner(System.in);

        int votos[] = {0,0,0,0};
        /* INDEX
        0 = Windows
        1 = Unix
        2 = Linux
        3 = Mac OS
         */
        int opcao_usuario = 0;

        while (opcao_usuario <= 4){
            System.out.println("\nQual é o melhor Sistema Operacional para uso em servidores\n" +
                               "1 - Windows Server\n" +
                               "2 - Unix\n" +
                               "3 - Linux\n" +
                               "4 - Mac OS\n" +
                               "5 - [FINALIZAR VOTAÇÃO]");
            opcao_usuario = teclado.nextInt();

            switch (opcao_usuario){
                case 1:
                votos[0] += 1;
                    break;
                case 2:
                    votos[1] += 1;
                    break;
                case 3:
                    votos[2] += 1;
                    break;
                case 4:
                    votos[3] += 1;
                    break;
                case 5:
                    System.out.println("\n[VOTOS]" +
                                       "\nWindows Server: "+ votos[0] +
                                       "\nUnix: "+ votos[1] +
                                       "\nLinux: "+ votos[2] +
                                       "\nMac OS: "+ votos[3]);
                    break;
                default:
                    System.out.println("Opção invalida");
                    opcao_usuario = 0;
                    break;

            }
        }
    }
}
