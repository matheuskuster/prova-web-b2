import { Metadata } from "next"

import { UserRecoverPasswordForm } from "./components/user-recover-password-form"

export const metadata: Metadata = {
  title: "Inova Week Management - Recuperar senha",
  description: "Autenticação de usuário",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative hidden h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
             Inova Week Management
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;
                  Esta aplicação foi desenvolvida para a disciplina de Programação Web, com o intuito de simular um sistema de autenticação e um dashboard.
                &rdquo;
              </p>
              <footer className="text-sm">Matheus Kuster</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Esqueceu sua senha?
              </h1>
              <p className="text-sm text-muted-foreground">
                Sem problemas, digite seu e-mail abaixo e enviaremos instruções para recuperá-la.
              </p>
            </div>
            <UserRecoverPasswordForm />
          </div>
        </div>
      </div>
    </>
  )
}
