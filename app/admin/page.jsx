"use client"

import { useState } from "react"


export default function AdminPage(){


    const[nome,setNome] = useState("")
    const [plano,setPlano] = useState("")
    const[valor,setValor] = useState("")



    async function cadastrarUsuario() {
        
        try {
            const response = await fetch("http://localhos:3001/Planos", {
                method:"POST", 
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                   nome,
                   plano,
                   valor
                })
            })

            if(response.ok){
                alert("Usuario cadastrado com sucesso!")
            }
        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar!")
        }

    }

    return(
        <main className="min-h-screen bg-gray-900 P-8">
            <div className="mx-auto max-w-xl rounded-2xl bg-black p-8 shadow">
                <h1 className="mb-6 text-3xl font-bold">Cadastrar Usuario</h1>
                <form onSubmit={cadastrarUsuario} className="space-y-5">
                   
                    <div>
                        <label>Nome</label>
                        <input type="text"
                        value={nome}
                        onChange={(e)=> setNome(e.target.value)}
                        placeholder="Digite seu nome"
                        className="w-full rounded-2x1 border  border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 p-3"
                        />
                    </div>

                    <div>
                        <label>Plano</label>
                        <input type="text"
                        value={plano}
                        onChange={(e)=> setPlano(e.target.value)}
                        placeholder="Digite o plano"
                        className="w-full rounded-2x1 border  border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 p-3"
                        />
                    </div>

                    <div>
                        <label>Valor</label>
                        <input type="number"
                        value={valor}
                        onChange={(e)=> setValor(e.target.value)}
                        placeholder="Ex: 10.00"
                        className="w-full rounded-2x1 border  border-gray-200 bg-white px-4 py-3.5 text-sm text-gray-900 p-3"
                        />
                    </div>

                    <button
                    type="submit"
                    className="w-full rounded bg-green-600 py-3 font-semibold text-white hover:bg-green-500 cursor-pointer">
                        Cadastrar Usuario
                    </button>
                </form>
            
            
            </div>
        </main>
    )
}