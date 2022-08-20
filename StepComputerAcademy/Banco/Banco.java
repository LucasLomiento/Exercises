package com.company;

import java.util.Scanner;

public class Banco {

    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);

        double saldo = 0, valor;
        int opcao_usuario = 0;

        while (opcao_usuario <= 3) {

            System.out.println("\nOque deseja fazer?\n" +
                    "1 - Depositar\n" +
                    "2 - Sacar\n" +
                    "3 - Saldo\n" +
                    "4 - Sair");
            opcao_usuario = teclado.nextInt();

            switch (opcao_usuario) {
                case 1:
                    System.out.println("Digite o valor do deposito");
                    valor = teclado.nextDouble();
                    saldo += valor;
                    System.out.println("Foi depositado: "+valor+" Reais a sua conta.\n" +
                                        "O valor atual da sua conta é de: "+saldo);
                    break;

                case 2:
                    System.out.println("Digite o valor do saque");
                    valor = teclado.nextDouble();

                    if (valor > saldo) {
                        System.out.println("Saque maior que saldo atual\n" +
                                            "Seu saldo atual é de "+saldo);
                    }else if(valor <= 0) {
                        System.out.println("Não é aceito valores igual ou menores que zero para saques.");
                    }else{
                        saldo -= valor;
                        System.out.println("Foi sacado: "+valor+" Reais de sua conta. \n" +
                                            "O valor atual da sua conta é de: "+saldo);
                    }

                    break;

                case 3:
                    System.out.println("Seu saldo atual é de: "+saldo);

                default:
                    break;
            }
        }
    }
}
