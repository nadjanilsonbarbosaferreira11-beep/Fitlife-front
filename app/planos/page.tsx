"use client"

import { useEffect, useState } from "react"

interface Planos {
  id: number
  nome: string
  plano: string
  valor: number
}

export default function planoPage() {
  const [planos, setPlanos] = useState<Planos[]>([])
  const [loading, setLoading] = useState(true)

  async function mostrarProdutos() {
    try {
      const response = await fetch("http://localhost:3001/Planos")
      
      if (!response.ok) {
        throw new Error("Erro ao buscar usuario")
      }

      const data = await response.json()

      console.log(data)

      setPlanos(data)
    } catch (error) {
      console.error("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarProdutos()
  }, [])

  return (
    <main className="p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Planos
      </h1>

      {loading ? (<p>Carregando usuarios...</p>) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {planos.map((plano) => (

            
            <div
              key={plano.id}
              className="rounded-lg border p-4 shadow"
            >
 
              <h2 className="mt-3 text-xl font-semibold">
                {plano.nome}
              </h2>


              <p className="mt-2 text-lg font-bold text-green-600">
                R$ {Number(plano.valor).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}
