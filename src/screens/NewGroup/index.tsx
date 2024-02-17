import { Container } from "Loading/styles";
import { Content, Icon } from "./styles";
import { HighLight } from "@components/HighLight/index.";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Header } from "@components/Header";


export function NewGroup() {
    return (
        <Container>
            <Header 
                showBackButton 
            />

            <Content>
                <Icon />

                <HighLight
                    title="Crie sua turma"
                    subtitle="Clique no botão abaixo para criar uma turma"
                />

                <Input 
                    placeholder="Nome da turma"
                />

                <Button 
                    title="Criar"
                    style={{ marginTop: 20 }}
                />
            </Content>
        </Container>
    )
}