package Java_criando_a_sua_primeira_aplicacao.Desafios3;
import java.util.Scanner;
//Crie um menu que oferece duas opções ao usuário: "1. Calcular área do quadrado" e "2. Calcular área do círculo". Solicite a escolha do usuário e realize o cálculo da área com base na opção selecionada.
//Crie um programa que solicite ao usuário um número e exiba a tabuada desse número de 1 a 10.
//Crie um programa que solicite ao usuário a entrada de um número inteiro. Verifique se o número é par ou ímpar e exiba uma mensagem correspondente.
//Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

public class Terceiro {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("\nDigite uma opção abaixo:\n1 para calcular a área do quadrado.\n2 para calcular a área do círculo.");
        int opcao = scanner.nextInt();
        if (opcao == 1){
            System.out.println("\nDigite o lado do quadrado: ");
            double lado = scanner.nextDouble();
            System.out.println("\nDigite a área do quadrado: ");
            double area = scanner.nextDouble();
            double resultado = lado * area;
            System.out.println("\nResultado do quadrado: " + resultado);
        } else if(opcao == 2){
            System.out.println("\nDigite o PI: ");
            double pi = scanner.nextDouble();
            System.out.println("Digite o raio: ");
            double raio = scanner.nextDouble();
            System.out.println("Digite o quadrado: ");
            double quadrado = scanner.nextDouble();
            double resultado2 = (pi * raio);
            System.out.println("Resultado do cálculo do círculo: " + resultado2);
        }



    }
}
