# 1 - Javascript Avançado

[slides](https://docs.google.com/presentation/d/1EkLKA7qfpbH1Rc2lkl43h5BZ0X2Uv5O-uoEzc1Z1qKs/edit?usp=sharing)

## Promises - Chaining
```
var promise = job1();

promise

.then(function(data1) {
    console.log('data1', data1);
    return job2();
})

.then(function(data2) {
    console.log('data2', data2);
    return 'Hello world';
})

.then(function(data3) {
    console.log('data3', data3);
});

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {

        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}
```

## Async Await - ex 1
```
function job() {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'Hello world 1');
    });
}

async function test() {
    let message = await job();
    console.log(message);

    return 'Hello world 2';
}

test().then(function(message) {
    console.log(message);
});
```

# Desafios

### Desafio 1
O código abaixo está síncrono, você deve modificálo para que *callback1* seja chamado apenas uma vez depois de 2 segundos e *callback2* seja chamado 3 vezes com um intervalo de 1 segundo

```
function job(callback1, callback2) {
    callback1();

    callback2();
    callback2();
    callback2();
}

```

[challenge](https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/some-pratice)

### Desafio 2

Dado o código abaixo, a função job deve retornar um objeto de promise, a promise deve ser resolvida 2 segundos apóes invocar a função job e exibir um hello world

```
function job() {
    return 'hello world';
}

```

### Desafio 3

Nesse código, sua função recebe um parâmetro. Você deve modificar o código abaixo com base nas seguintes regras:

* Sua função deve sempre retornar uma promise
* Se os dados não forem um número, retorne uma promise rejeitada instantaneamente e mostre o conteúdo do "erro"
* Se os dados forem um número ímpar, retorne uma promise resolvida 1 segundo depois e exiba a mensagem "ímpar"
* Se os dados forem um número par, retorne uma promise rejeitada 2 segundos depois e exiba a mensagem "par"

```
function job(data) {
    return something;
}
```
[challenge](https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/more-pratice-with-promises)

### Desafio 4 

O código a seguir usa promises para manipular um resultado assíncrono. O resultado é uma promise que gera um ID quando resolvido. Esse ID deve ser usado para recuperar informações do banco de dados. No final, sua função deve retornar a propriedade *name* da informação. Em caso de erro, você deve retornar uma promise rejeitada com o erro fornecido. Mas primeiro você deve notificar o errorManager com o erro.

```
function job(result, database, errorManager) {
    return result

    .then(function(id) {
        return database.get(id);
    })

    .then(function(info) {
        return info.name;
    })

    .catch(function(error) {
        errorManager.notify(error);
        throw error;
    });
}

module.exports = job;
```

[challenge](https://www.codingame.com/playgrounds/482/javascript-async-and-await-keywords/time-to-pratice)
