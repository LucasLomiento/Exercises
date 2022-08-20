package com.company;
import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        double num1, num2, resultado;
        int opcao_usuario = 0;

        while(opcao_usuario <= 4) {

            System.out.println("\nOque deseja fazer?\n" +
                                "1 - Somar\n" +
                                "2 - Subtrair\n" +
                                "3 - Multiplicar\n" +
                                "4 - Dividir \n" +
                                "5 - Sair ");
            opcao_usuario = teclado.nextInt();

            if(opcao_usuario <= 4){

                System.out.println("Digite o primeiro número");
                num1 = teclado.nextDouble();

                System.out.println("Digite o segundo número");
                num2 = teclado.nextDouble();

                switch(opcao_usuario) {
                    case 1:
                        resultado = num1 + num2;
                        System.out.printf("%.2f + %.2f = " + resultado + "\n", num1, num2);
                        break;

                    case 2:
                        resultado = num1 - num2;
                        System.out.printf("%.2f - %.2f = " + resultado + "\n", num1, num2);
                        break;

                    case 3:
                        resultado = num1 * num2;
                        System.out.printf("%.2f * %.2f = " + resultado + "\n", num1, num2);
                        break;

                    case 4:
                        resultado = num1 / num2;
                        System.out.printf("%.2f / %.2f = " + resultado + "\n", num1, num2);
                        break;

                    default:
                        break;
                }
            }
        }
    }
}
