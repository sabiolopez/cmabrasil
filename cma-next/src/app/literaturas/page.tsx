'use client';

import React, { useState } from 'react';
import { PageHeader } from '@/components/PageHeader';
import { LiteratureModal } from '@/components/LiteratureModal';
import { ChevronRight } from 'lucide-react';

// Using a type to better represent the literature structure
type Literature = {
    id: string;
    title: string;
    tag: string;
    content: React.ReactNode;
    pdfUrl?: string;
};

const literatures: Literature[] = [
    {
        id: 'o-que-e-cma',
        title: 'O Que é o CMA?',
        tag: 'Fundamento',
        content: (
            <div className="space-y-6 text-cma-text leading-relaxed">
                <p>
                    O CMA tem uma mensagem simples: A recuperação da dependência de metanfetamina é possível. Você nunca mais precisa usar. E você não precisa se recuperar sozinho.
                </p>
                <p>
                    Nós somos o Cristal Meth Anônimos. Juntos, praticamos os Doze Passos como um novo modo de viver, livres do uso da metanfetamina.
                </p>
                <p>
                    O único requisito para ser membro é o desejo de parar de usar. Não há taxas nem inscrição de matrículas. Compartilhamos nossa experiência, força e esperança para ajudar uns aos outros a permanecer limpos e sóbrios, um dia de cada vez. Por meio de nossas ações e do serviço, levamos a mensagem de recuperação ao adicto que ainda sofre.
                </p>
                <p>
                    Nossa Irmandade defende a abstinência completa da metanfetamina e de todas as outras substâncias que alteram a mente, incluindo álcool, maconha, inalantes e qualquer medicamento que não seja usado conforme prescrição médica.
                </p>

                <div className="bg-cma-bg p-6 rounded-xl border border-cma-teal/10 my-8">
                    <p className="font-medium text-cma-dark mb-4">Sugerimos construir uma base sólida com:</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                            <span>Reuniões e Confraternização</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                            <span>Apadrinhamento e Trabalho dos Passos</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                            <span>Serviço e Comprometimento</span>
                        </li>
                    </ul>
                </div>

                <p>
                    Permanecer anônimo dá a todos os membros a mesma oportunidade de recuperação. Somos simplesmente adictos ajudando outros adictos.
                </p>
                <p className="text-lg font-medium text-cma-dark text-center mt-8 py-6 bg-cma-teal/5 rounded-xl">
                    Se você acha que tem um problema com metanfetamina, você está no lugar certo.<br />
                    Aqui, sempre haverá um lugar para você. Seja Bem-vindo.
                </p>
            </div>
        )
    },
    {
        id: 'voce-e-adicto',
        title: 'Você é um Adicto?',
        tag: 'Auto-reflexão',
        content: (
            <div className="space-y-6 text-cma-text leading-relaxed">
                <p>
                    Não importa como você chame. Não importa como você usa. O uso nos levou para o fundo do poço, porque sem exceção, é isso que faz.
                </p>
                <p>
                    A metanfetamina é um problema na sua vida? Você é um adicto? Apenas você pode responder a essas perguntas. Para a maioria de nós que admitimos a derrota, a resposta é bem clara: Sim, tivemos um problema com a metanfetamina e não, não pudemos resolver o problema sozinhos. Tivemos que admitir a derrota para vencer.
                </p>
                <p>
                    Não conseguíamos controlar o nosso uso da droga. O que começou como uso de fim de semana ou ocasional, tornou-se uso diário, e logo nos encontramos além do alcance de ajuda humana. Realmente sofríamos de uma falta de poder para resolver o nosso problema.
                </p>
                <p>
                    Alguns de nós usávamos a metanfetamina para trabalhar por mais tempo e com maior esforço, mas não conseguíamos manter um emprego. Outros cutucavam os rostos e os braços por horas e horas, ou arrancavam o cabelo. Alguns de nós tinham desejo sexual incontrolável. Outros mexiam incessantemente em projetos, sem realizar nada, mas mesmo assim ficávamos tão ocupados que não conseguíamos chegar no trabalho na hora.
                </p>
                <p>
                    Nos iludíamos a acreditar que ficar acordados noites seguidas era algo normal, que nosso uso estava sob controle, que poderíamos parar se quiséssemos, ou que não tínhamos condições de parar, ou que o nosso uso não afetava as nossas vidas.
                </p>
                <p>
                    Talvez tenhamos visto um amigo ir para a prisão, ou perder o apartamento, ou perder o emprego, ou perder a confiança da própria família, dos filhos, ou morrer, mas nossas mentes estavam tão nubladas que não tínhamos capacidade de admitir que seríamos os próximos a perder tudo.
                </p>
                <p>
                    A maioria de nós não via uma saída, acreditando que iríamos usar até o dia da nossa morte.
                </p>
                <p>
                    Quase sem exceção, se tivéssemos um momento de honestidade, tínhamos que admitir que o nosso uso da metanfetamina criava problemas insuperáveis em nossas vidas.
                </p>
                <p>
                    A única saída era ter a coragem de admitir, que a metanfetamina, nossa amiga de outrora, estava nos matando.
                </p>
                <p>
                    Não importa como chegou aqui. Os tribunais enviaram alguns de nós, outros vieram a pedido da família ou dos amigos, e alguns vieram por vontade própria. A questão é se você quer ajuda e está disposto a fazer tudo que for necessário para mudar sua vida.
                </p>
            </div>
        )
    },
    {
        id: 'plano-de-acao',
        title: 'Os Doze Passos: Um Plano de Ação',
        tag: 'Prática',
        content: (
            <div className="space-y-6 text-cma-text leading-relaxed">
                <p>
                    Viemos ao CMA pelo nosso problema em comum. Permanecemos pela nossa solução coletiva. Para obter liberdade à longo prazo das garras do nosso vício, praticamos os Doze Passos do CMA:
                </p>

                <ol className="list-decimal pl-6 space-y-3 my-6 font-medium text-cma-dark">
                    <li>Admitimos que éramos impotentes perante a metanfetamina – que nossas vidas tinham se tornado incontroláveis.</li>
                    <li>Viemos a acreditar que um Poder Superior a nós mesmos poderia devolver-nos à sanidade.</li>
                    <li>Decidimos entregar nossa vontade e nossa vida aos cuidados de um Deus da maneira como nós O compreendemos.</li>
                    <li>Fizemos um profundo e destemido inventário moral de nós mesmos.</li>
                    <li>Admitimos perante Deus, perante nós mesmos e perante outro ser humano, a natureza exata de nossas falhas.</li>
                    <li>Prontificamo-nos inteiramente a deixar que Deus removesse todos esses defeitos de caráter.</li>
                    <li>Humildemente pedimos a Ele que removesse nossos defeitos.</li>
                    <li>Fizemos uma lista de todas as pessoas a quem tínhamos prejudicado e nos dispusemos a fazer reparação à todas elas.</li>
                    <li>Fizemos reparações diretas a tais pessoas, sempre que possível, exceto quando fazê-lo pudesse prejudicá-las ou a outras.</li>
                    <li>Continuamos fazendo o inventário pessoal e, quando estávamos errados, nós o admitíamos prontamente.</li>
                    <li>Procuramos, através da prece e da meditação, melhorar nosso contato consciente com um Deus do nosso próprio concebimento, rogando apenas o conhecimento de Sua vontade em relação a nós, e forças para realizar essa vontade.</li>
                    <li>Tendo experimentado um despertar espiritual, como resultado desses passos, procuramos transmitir essa mensagem a outros adictos em metanfetamina e praticar esses princípios em todas as nossas atividades.</li>
                </ol>

                <p>
                    A metanfetamina parecia ser a solução aos nossos problemas. Mas, não mais. Nós compreendemos que o uso de drogas estava nos matando. Uma vez começando, não temos como parar. Hoje, para permanecermos limpos e sóbrios, não pegamos mais na droga, não importa o que aconteça.
                </p>
                <p>
                    Em recuperação, escolhemos a fé em vez do medo e o progresso em vez da perfeição. Quando trabalhamos nos Passos, colocamos os princípios espirituais em prática.
                </p>
                <p className="font-medium text-cma-dark text-center py-6 bg-cma-teal/5 rounded-xl">
                    A Entrega é uma ação...ela traz liberdade;<br />
                    A Humildade é uma ação...ela traz perspectiva;<br />
                    A Gratidão é uma ação...ela traz satisfação.
                </p>
                <p>
                    Essas são as dádivas da recuperação: Despertamos, as nossas vidas melhoram e aos poucos nos movemos do egoísmo à ajuda ao próximo. Agimos como mensageiros àqueles que sofrem – mensageiros de esperança e de regeneração, de conexão, de compaixão e até mesmo de alegria.
                </p>
            </div>
        )
    },
    {
        id: 'doze-tradicoes',
        title: 'As Doze Tradições',
        tag: 'Unidade',
        content: (
            <div className="space-y-6 text-cma-text leading-relaxed">
                <ol className="list-decimal pl-6 space-y-3 font-medium text-cma-dark">
                    <li>O nosso bem-estar comum deve vir em primeiro lugar; a recuperação pessoal depende da unidade do CMA.</li>
                    <li>Para o propósito do nosso grupo, há apenas uma autoridade máxima: um Deus amoroso, conforme expresso em nossa consciência coletiva. Nossos líderes são apenas servidores de confiança; eles não governam.</li>
                    <li>O único requisito para ser membro do CMA é o desejo de parar de usar.</li>
                    <li>Cada grupo deve ser autônomo, exceto em questões que afetem outros grupos ou o CMA como um todo.</li>
                    <li>Cada grupo tem apenas um propósito principal: levar sua mensagem ao adicto que ainda sofre.</li>
                    <li>Um grupo de CMA nunca deve endossar, financiar ou emprestar o nome do CMA a nenhuma sociedade relacionada ou empresa externa, para que problemas de dinheiro, propriedade e prestígio não nos desviem do nosso propósito principal.</li>
                    <li>Todo grupo de CMA deve ser totalmente autossustentável, recusando contribuições externas.</li>
                    <li>O CMA deve permanecer para sempre sem fins profissionais, mas nossos centros de serviço podem empregar trabalhadores especializados.</li>
                    <li>O CMA, como tal, nunca deve ser organizado; mas podemos criar conselhos ou comitês de serviço diretamente responsáveis por aqueles a quem servem.</li>
                    <li>O CMA não tem opinião sobre questões externas; portanto, o nome CMA nunca deve ser envolvido em controvérsias públicas.</li>
                    <li>Nossa política de relações públicas é baseada em atração e não em promoção; precisamos sempre manter o anonimato pessoal no nível da imprensa, rádio, televisão, filmes e outras mídias públicas.</li>
                    <li>O anonimato é o alicerce espiritual de todas as nossas tradições, sempre nos lembrando de colocar os princípios acima de personalidades.</li>
                </ol>
            </div>
        )
    },
    {
        id: 'promessas-9-passo',
        title: 'As Promessas do 9º Passo',
        tag: 'Esperança',
        content: (
            <div className="space-y-6 text-cma-text leading-relaxed">
                <p>
                    Se formos cuidadosos sobre esta fase do nosso desenvolvimento, ficaremos surpresos antes de chegarmos à metade do caminho.
                </p>

                <ul className="space-y-3 font-medium text-cma-dark bg-cma-bg p-6 rounded-xl border border-cma-teal/10 my-8">
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Estamos a ponto de conhecer uma nova liberdade e uma nova felicidade.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Não lamentaremos o passado, nem nos recusaremos a enxergá-lo.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Compreenderemos o significado da palavra serenidade e conheceremos a paz.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Não importa até que ponto descemos, veremos como nossa experiência pode ajudar a outras pessoas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Aquele sentimento de inutilidade e autopiedade desaparecerá.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Perderemos o interesse em coisas egoístas e passaremos a nos interessar pelos nossos semelhantes.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>O egoísmo deixará de existir.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Todos os nossos pontos de vista e atitude perante a vida irão se modificar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Perderemos o medo das pessoas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>O medo da insegurança econômica nos abandonará.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Saberemos, intuitivamente, como lidar com situações que costumavam nos desconcertar.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-cma-gold mt-2.5 flex-shrink-0" />
                        <span>Perceberemos, de repente, que Deus está fazendo por nós o que não conseguíamos fazer sozinhos.</span>
                    </li>
                </ul>

                <p>
                    Serão estas promessas extravagantes? Achamos que não.
                </p>
                <p>
                    Elas estão sendo cumpridas entre nós — às vezes depressa, outras devagar. Elas sempre se materializarão se trabalharmos por ela.
                </p>
            </div>
        )
    },
    {
        id: 'posso-ficar-sobrio',
        title: 'Posso Ficar Sóbrio',
        tag: 'Motivação',
        content: (
            <div className="space-y-6 text-cma-text leading-relaxed flex flex-col items-center">
                <div className="w-full max-w-2xl text-center space-y-6">
                    <p className="text-lg">Posso ficar sóbrio. Não sou obrigado a recair. Não preciso nunca mais voltar para a escuridão; Posso ficar aqui — existe uma solução.</p>
                    <p className="text-lg">Posso ficar aqui e parar de correr, de fugir; Posso ficar aqui e começar a dizer ‘Sim’ pra vida.</p>
                    <p className="text-lg">Posso achar um Poder Superior em que possa confiar. Posso achar a paz e descobrir quem eu sou de verdade.</p>
                    <p className="text-lg">Posso tomar uma decisão e fazer as mudanças. Posso fazer novas amizades – E reparar as amizades antigas.</p>
                    <p className="text-lg">Muitos adictos voltam à usar, mas eu não preciso. Não se eu achar um padrinho e começar a trabalhar os Passos.</p>
                </div>

                <div className="w-full max-w-2xl text-center text-xl text-cma-dark font-heading font-medium my-8 py-10 px-6 bg-cma-teal/5 rounded-2xl border border-cma-teal/10">
                    <p className="mb-6 opacity-70">Respire fundo…</p>
                    <p className="leading-relaxed">
                        Se eu aceitar a verdade e desapegar das fantasias,<br />
                        Se eu conseguir pedir um pouco de ajuda,<br />
                        Se conseguir praticar os passos sugeridos,<br />
                        <span className="block mt-4 text-cma-gold font-bold">Um dia após o outro, Serei feliz.</span>
                    </p>
                </div>
            </div>
        )
    },
    {
        id: 'hoje-eu-posso',
        title: 'Hoje Eu Posso',
        tag: 'Diário',
        content: (
            <div className="space-y-8 text-cma-text leading-relaxed">
                <p className="text-lg text-center font-medium text-cma-dark mb-6">Vamos relembrar o que podemos fazer hoje:</p>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-cma-teal/10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cma-gold"></div>
                        <h3 className="font-heading text-lg font-medium text-cma-dark mb-2">Hoje eu posso…</h3>
                        <p>Abraçar o poder da honestidade. Eu acolho as mudanças e me reoriento. Palavra por palavra, ação por ação, faço de tudo pra refletir a verdade.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-cma-teal/10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cma-gold"></div>
                        <h3 className="font-heading text-lg font-medium text-cma-dark mb-2">Hoje eu posso…</h3>
                        <p>Abrir mão dos meus velhos hábitos. O egoísmo e a rigidez dão lugar a um instinto de serviço. Gratidão, nesse momento, é a minha lei.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-cma-teal/10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cma-gold"></div>
                        <h3 className="font-heading text-lg font-medium text-cma-dark mb-2">Hoje eu posso…</h3>
                        <p>Contemplar a riqueza da vida enquanto recebo, compartilho e sorrio com outros adictos. Ao me abrir para um Poder Superior, acho progresso e paz.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-cma-teal/10 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cma-gold"></div>
                        <h3 className="font-heading text-lg font-medium text-cma-dark mb-2">Hoje eu posso…</h3>
                        <p>Aceitar uma nova realidade—que nessa luta, não estou só. Muitos já percorreram esse caminho, e tenho companheiros ao meu lado.</p>
                    </div>
                </div>

                <p className="text-xl font-heading font-medium text-center text-cma-gold mt-10 p-6 bg-cma-gold/5 rounded-2xl">
                    Hoje… Juntos … Podemos viver com esperança!
                </p>
            </div>
        )
    },
    {
        id: 'sexo-relacionamento',
        title: 'Sexo e Relacionamento Sóbrio',
        tag: 'Vida Nova',
        content: (
            <div className="space-y-6 text-cma-text leading-relaxed">
                <p>
                    Não queremos ser o árbitro da conduta sexual de ninguém. Todos nós temos problemas sexuais. Dificilmente seríamos humanos se não tivéssemos. O que podemos fazer sobre eles?
                </p>
                <p>
                    Revisamos nossa própria conduta ao longo dos anos anteriores. Onde fomos egoístas, desonestos ou insensíveis? A quem havíamos machucado? Despertamos injustificadamente ciúme, suspeita ou amargura? Onde estávamos errados? O que deveríamos ter feito em vez disso? Colocamos tudo isso no papel e analisamos.
                </p>
                <p>
                    Dessa forma, tentamos moldar um ideal sensato e sólido para nossa futura vida sexual. Submetemos cada relação a este teste - era egoísta ou não? Pedimos a Deus para moldar nossos ideais e nos ajudar a viver de acordo com eles. Nós sempre lembramos que nossos poderes sexuais foram dados por Deus e, portanto, bons, não para serem usados levianamente ou egoisticamente, nem para serem desprezados e odiados.
                </p>
                <div className="bg-cma-bg p-6 rounded-xl border-l-4 border-cma-gold my-8 italic text-lg">
                    <p>
                        Seja qual for o nosso ideal, devemos estar dispostos a crescer em direção a ele. Devemos estar dispostos a fazer as pazes onde causamos danos, desde que não causemos ainda mais danos ao fazê-lo.
                    </p>
                </div>
                <p>
                    Em outras palavras, tratamos o sexo como faríamos com qualquer outro problema. Na meditação, perguntamos a Deus o que devemos fazer sobre cada assunto específico. A resposta certa virá, se quisermos.
                </p>

                <p className="text-right text-sm text-cma-text/60 italic mt-8 pt-6 border-t border-cma-teal/10">
                    Livro do A.A. (Alcoólicos Anônimos) - PÁGINA 69
                </p>
            </div>
        )
    },
];

export default function LiteraturasPage() {
    const [selectedLiterature, setSelectedLiterature] = useState<Literature | null>(null);

    return (
        <div className="bg-white min-h-screen pb-20">
            <PageHeader
                title="Literaturas"
                tag="Recursos de Leitura"
                subtitle="O Crystal Meth Anonymous fornece uma variedade de literatura para ajudar no processo de recuperação."
                image="/card-literature.png"
            />

            <section className="py-20 px-6 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <h2 className="text-3xl font-heading font-medium text-cma-dark mb-8 text-center sm:text-left">
                        Nossas Literaturas
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                        {literatures.map((lit) => (
                            <button
                                key={lit.id}
                                onClick={() => setSelectedLiterature(lit)}
                                className="w-full text-left flex items-center justify-between p-6 bg-white rounded-xl border border-cma-teal/10 hover:border-cma-gold hover:shadow-md transition-all group group-hover:-translate-y-1"
                            >
                                <div>
                                    <span className="text-[10px] uppercase tracking-widest text-cma-teal/60 font-medium mb-1 block">
                                        {lit.tag}
                                    </span>
                                    <span className="font-heading font-medium text-lg text-cma-dark group-hover:text-cma-gold transition-colors">
                                        {lit.title}
                                    </span>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-cma-bg flex items-center justify-center group-hover:bg-cma-gold/10 transition-colors">
                                    <ChevronRight size={20} className="text-cma-teal/40 group-hover:text-cma-gold group-hover:translate-x-0.5 transition-all" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Literature Modal */}
            <LiteratureModal
                isOpen={!!selectedLiterature}
                onClose={() => setSelectedLiterature(null)}
                title={selectedLiterature?.title || ''}
                content={selectedLiterature?.content || null}
                pdfUrl={selectedLiterature?.pdfUrl}
            />
        </div>
    );
}
