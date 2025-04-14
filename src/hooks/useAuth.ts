import { useState, useEffect } from 'react'
import { signIn, signOut, getCurrentUser, supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar usuário atual ao carregar
    checkUser()

    // Configurar listener para mudanças de autenticação
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const checkUser = async () => {
    try {
      const { user } = await getCurrentUser()
      setUser(user)
    } catch (error) {
      console.error('Error checking user:', error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const { data, error } = await signIn(email, password)
      if (error) throw error
      setUser(data.user)
      return { success: true }
    } catch (error) {
      console.error('Error logging in:', error)
      return { success: false, error }
    }
  }

  const logout = async () => {
    try {
      const { error } = await signOut()
      if (error) throw error
      setUser(null)
      return { success: true }
    } catch (error) {
      console.error('Error logging out:', error)
      return { success: false, error }
    }
  }

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  }
} 