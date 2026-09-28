"use client"

import { useEffect, useState } from "react"

interface Planos {
  id: number
  nome: string
  valor: number
}

export default function palnoPage() {
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
}