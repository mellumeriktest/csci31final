import { createClient } from '@supabase/supabase-js'

export function getClient() {
  const supabase = createClient('https://bzcrkwdrpftktwtohvsw.supabase.co', process.env.SUPABASE_SERVICE_ROLE_KEY)
  return supabase
}

export async function insertCard(card) {
  const supabase = getClient()
  return supabase.from('cards').insert(card)
}

export async function findCards() {
  const supabase = getClient()
  const { data: cards, error } = await supabase.from('cards').select()
  return cards
}
