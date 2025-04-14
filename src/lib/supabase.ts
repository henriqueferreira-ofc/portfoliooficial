import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Funções de autenticação
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string
          image_url: string
          technologies: string[]
          github_url?: string
          live_url?: string
          featured: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description: string
          image_url: string
          technologies: string[]
          github_url?: string
          live_url?: string
          featured?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string
          image_url?: string
          technologies?: string[]
          github_url?: string
          live_url?: string
          featured?: boolean
        }
      }
      skills: {
        Row: {
          id: string
          created_at: string
          name: string
          category: 'frontend' | 'backend' | 'devops' | 'database' | 'other'
          proficiency: number
          icon_url?: string
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          category: 'frontend' | 'backend' | 'devops' | 'database' | 'other'
          proficiency: number
          icon_url?: string
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          category?: 'frontend' | 'backend' | 'devops' | 'database' | 'other'
          proficiency?: number
          icon_url?: string
        }
      }
      experiences: {
        Row: {
          id: string
          created_at: string
          company: string
          position: string
          start_date: string
          end_date?: string
          description: string
          technologies: string[]
          current: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          company: string
          position: string
          start_date: string
          end_date?: string
          description: string
          technologies: string[]
          current?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          company?: string
          position?: string
          start_date?: string
          end_date?: string
          description?: string
          technologies?: string[]
          current?: boolean
        }
      }
      education: {
        Row: {
          id: string
          created_at: string
          institution: string
          degree: string
          field: string
          start_date: string
          end_date?: string
          description?: string
          current: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          institution: string
          degree: string
          field: string
          start_date: string
          end_date?: string
          description?: string
          current?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          institution?: string
          degree?: string
          field?: string
          start_date?: string
          end_date?: string
          description?: string
          current?: boolean
        }
      }
      contact_messages: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          subject: string
          message: string
          read: boolean
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          subject: string
          message: string
          read?: boolean
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          subject?: string
          message?: string
          read?: boolean
        }
      }
    }
  }
} 