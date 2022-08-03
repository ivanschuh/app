import React, { FC } from 'react';
import './App.css';

//design
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const App: React.FC = () => (
    <div className='background'>
      <header className='header'>
        <div className='avatar'>
          <div>
            <Avatar size={200} icon={<UserOutlined />} />
          </div>
        </div>
        <div className='apresentacao'>
          <h1 className='titulo'>Ivan Nicolli Schuh</h1>
          <p className='descricao'>Olá, meu nome é Ivan, sou acadêmico de Analise e Desenvolvimento de Sistemas. <br></br>Aqui segue meu portifólio com um pouco sobre mim e sobre as tecnologias as quais programo.</p>
        </div>
      </header>
      <div className='espaco'>

      </div>
      <div className='res'>
        <div className='titulo2'>
          <h1>Em construção</h1>
        </div>
        <div className='flex'>
          <div className='resumo'>
            AQUI VAI IR MEU RESUMO DA CARREIRCA SE EXISTIR..........................................................................
          </div>
          <div className='linhadotempo'>
            <Timeline mode="alternate">
              <Timeline.Item>Técnico em Manutenção I  14-01-2019</Timeline.Item>
              <Timeline.Item color="green">Desenvolvedor de Sistemas I 08-10-2022</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px'}}/>}>
                Nestes 10 (dez) meses desempenhando a função de Desenvolvedor de Sistemas I, trabalhei com as seguintes linguagens de programação: HTML | CSS | JavaScript | jQuery | SQL (oracle) | PHP  
              </Timeline.Item>
              <Timeline.Item color="red">Desenvolvedor de Sistemas II 16-07-2022</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Trabalho Atual
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
);

export default App;
