import { StyledSectionWrapper } from "./styles";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface JobI {
  id: number;
  title: string;
  description: string;
  salary: string;
  requisits: string;
}

const jobsList: JobI[] = [
  {
    id: 1,
    title: "Analista de Atendimento",
    description:
      "Responsável por atender clientes online, responder dúvidas e acompanhar pedidos.",
    salary: "R$ 1.800,00",
    requisits:
      "Ensino médio completo, boa comunicação, habilidades em atendimento ao cliente, e familiaridade com ferramentas de e-commerce.",
  },
  {
    id: 2,
    title: "Analista de Marketing Digital",
    description:
      "Planejar e executar estratégias de marketing digital para impulsionar as vendas e fortalecer a presença da marca.",
    salary: "R$ 3.500,00",
    requisits:
      "Ensino superior em Marketing ou áreas correlatas, experiência em campanhas digitais, conhecimento em SEO, Google Ads e redes sociais.",
  },
];

function Jobs() {
  const { toast } = useToast();

  return (
    <StyledSectionWrapper>
      <h1>Vagas</h1>

      {jobsList.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>{job.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Salário:</strong> {job.salary}
            </p>
            <p>
              <strong>Requisitos:</strong> {job.requisits}
            </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={() => {
                toast({
                  title: "Inscrição confirmada!",
                  description: "Seu currículo foi enviado para a vaga selecionada!",
                  variant: "default"
                });
              }}
            >
              Candidatar-se
            </Button>
          </CardFooter>
        </Card>
      ))}
    </StyledSectionWrapper>
  );
}

export default Jobs;
