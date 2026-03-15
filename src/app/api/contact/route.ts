import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // TODO: Send email or save to database
    // For now, just log it
    console.log('Contact form submission:', { name, email, message })

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}