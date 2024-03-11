// distructor 

const pessoas ={
    name: "luca",
    email : "lucas@teste.teste",
    numberOfDogs : ""
}

console.log(pessoas.name);
console.log(pessoas.email);

const {name, email = "teste@teste.com", numberOfDogs = 0} = pessoas

console.log(name)
console.log(email)
console.log(numberOfDogs)

// const f = (n1,n2,op = "sum") => {
//     console.log(op)
//     switch (op){

//     }
// }

function MostrarInformacoes(objeto) {
    
    const { nome, cidade } = objeto;
    
    
    console.log(`Nome: ${nome}`);
    console.log(`Cidade: ${cidade}`);
}


const pessoa = {
    nome: "João",
    cidade: "São Paulo"
};

MostrarInformacoes(pessoa);

const MostrarInformacoes2 = ({ nome, cidade } = {}) => {
    console.log(`Nome: ${nome}`);
    console.log(`Cidade: ${cidade}`);
};

const pessoa2 = {
    nome: "João",
    cidade: "São Paulo"
};

MostrarInformacoes2();

let a = 5;
let b = 10;

console.log("Valores originais:");
console.log("a:", a);
console.log("b:", b);

// Trocar os valores
[a, b] = [b, a];

console.log("Valores trocados:");
console.log("a:", a);
console.log("b:", b);


//----------------------------- PROMISES -----------------

setTimeout(()=>{
    user = {name: "lucas"}
}, 3000)
 console.log("presente")


//  let foundUser;
//  User.find((user) =>{
//     foundUser = user
//     console.log(user)
//  })

//  console.log(user)

 setTimeout(()=>{
    user = {name: "lucas"}
}, 3000)
 console.log("presente")


const findUserPromisse = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            user = { id: 1, name :"lucas"}
        }, 1000);
    })
}
findUserPromisse().then((user) =>{
    console.log(user)
})


     new Promise ((resolve) =>{
       resolve({
        nome : "lucas",
        age: "20",
        cpf: "0192103912391293"
       })
    }).then (pessoa => {
        console.log(pessoa)
    })
       
        const delayFunction = (delay) => {
            return new Promise ((resolve) => {
                setTimeout(resolve,delay)
            })
        }

        delayFunction(1000).then(() => {
            console.log("para vc 1 segundo no futuro")
        })

