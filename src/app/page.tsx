import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex justify-between items-center border-b-zinc-100 border-b-2 py-4 px-10">
        <h1 className="text-2xl font-semibold tracking-tight">
          Inova Week Management
        </h1>

        <div className="flex items-center">
          <Link href="/login" className={cn(buttonVariants(), 'mr-2')}>Entrar</Link>
          <Link href="/registro" className={cn(buttonVariants({ variant: 'outline' }))}>Cadastrar</Link>
        </div>
      </header>

      <main className="px-10 flex items-center h-[calc(100vh-74px)]">
        <div className="w-[50%]">
          <h1 className="text-4xl font-semibold">
            Inova Week <span className="text-blue-800">eficiente.</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Ajudamos você a gerenciar seus eventos e projetos do Inova Week de forma simples e eficiente.
          </p>

          <Button className="mt-8">Saiba mais</Button>
        </div>
        <div className="ml-4">
          <div className="border-zinc-200 border-2 p-6 rounded-md">
            <Image src="/images/dashboard.png" width={700} height={700} alt="dashboard view" />
          </div>
        </div>
      </main>
    </div>
  )
}
