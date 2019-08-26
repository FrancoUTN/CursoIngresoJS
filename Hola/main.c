#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    char nombre[20];
    char sexo;
    char seguir;
    char nomMinNota[20];
    char nomMaxNota[20];
    char sexoMinNota;
    char sexoMaxNota;
    float nota;
    float maxNota;
    float minNota;
    float acuNota;
    float acuNotaF;
    float promedio;
    float promF;
    int i = 0;
    int flag = 1;
    int contF;

    do{
        i++;

        printf("\n Ingrese el %dº nombre: \n", i);
        fflush(stdin);
        scanf("%s", nombre);

        printf("\n Ingrese su sexo (f/m) \n");
        fflush(stdin);
        scanf("%c", &sexo);
        while(sexo != f && sexo != m){
            printf("\n Error. Ingrese su sexo >>(f/m)<< \n");
            fflush(stdin);
            scanf("%c", &sexo);
        }

        printf("\n Ingrese su nota: \n");
        fflush(stdin);
        scanf("%f", &nota);

        if(nota > maxNota || flag){
            maxNota = nota;
            strcpy(nomMaxNota, nombre);
            sexoMaxNota = sexo;
        }

        if(nota < minNota || flag){
            minNota = nota;
            strcpy(nomMinNota, nombre);
            sexoMinNota = sexo;
            flag = 0;
        }

    printf("\n %s, de sexo %c, saco la mayor nota.", nomMaxNota, sexoMaxNota);
    printf("\n %s, de sexo %c, saco la menor nota.", nomMinNota, sexoMinNota);

        printf("\n ¿Desea continuar? (s/n) \n");
        fflush(stdin);
        seguir = getche();

    }while(seguir == 's');

    printf("\n %s, de sexo %c, saco la mayor nota.", nomMaxNota, sexoMaxNota);
    printf("\n %s, de sexo %c, saco la menor nota.", nomMinNota, sexoMinNota);


}
