import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

const repository = {
 name: 'Unform',
 description: 'Forms in React',
 link: 'https://githunb.com'
}

export function RepositoryList(){
 return(
  <section className='repository-list'>
    <h1>Lista de repositórios</h1>
    <ul>
     <RepositoryItem repository={repository}/>
    </ul>
  
  </section>
 )
}