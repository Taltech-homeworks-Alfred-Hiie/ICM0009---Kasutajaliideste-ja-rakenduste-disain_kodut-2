import { Injectable } from '@angular/core';

export interface Persona {
  name: string;
  title: string;
  description: string;
  age: number;
  maritalStatus: string;
  occupation: string;
  location: string;
  income: string;
  imageUrl: string;
  bio: string;
  needs: string[];
  painPoints: string[];
  idealExperience: string[];
  goals: string[];
  quotes: string[];
  }

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  private personaData: Persona = {
    name: 'Teet Teerull',
    title: 'Müügimees',
    description: 'Otsib, kust leida informatsiooni praeguste toodete kohta. Soovib leida omahinda vastavalt konfigureeritud tootele. Tahab, et ka teised müügiosakonna töötajad leiaks kiirelt samu andmeid.',
    age: 44,
    maritalStatus: 'Abielus',
    occupation: 'Müügijuht',
    location: 'Tallinn, Eesti',
    income: '30000 €/aastas',
    imageUrl: 'https://media.istockphoto.com/id/184941527/photo/male-chimpanzee-in-business-clothes.jpg?s=612x612&w=0&k=20&c=nI-Xd9lm9EizPiPAvolPO1KeeE4I7ZbIvdNvwBwJKPk=',
    bio: 'Teet on müügijuht, kes töötab keskmise suurusega ettevõttes. Ta on abielus ja tal on kaks last. Teet naudib oma tööd, kuid tunneb sageli survet täita müügieesmärke ja hallata kliendisuhteid tõhusalt. Vabal ajal meeldib talle matkamine ja fotograafia.',
    needs: [
      'Leida kiirelt tooteinfot ja hinnakujundust',
      'Pakkuda klientidele täpseid ja ajakohaseid andmeid',
      'Parandada oma müügitegevuse efektiivsust',
      'Vähendada käsitsi tehtavat tööd ja vigade arvu',
      'Saada reaalajas teavitusi hinnamuudatustest',
      'Õpetada oma meeskonda paremini kasutama müügitööriistu'
    ],
    painPoints: [
      'Aegunud või ebatäpsed tooteandmed',
      'Raskused vajaliku info leidmisel',
      'Käsitsi andmesisestus ja sellega seotud vead',
      'Puudulikud integratsioonid teiste süsteemidega',
      'Ajapuudus müügitegevuse optimeerimiseks',
      'Vähene ülevaade meeskonna tegevusest'
    ],
    idealExperience: [
      'Kasutajasõbralik ja intuitiivne liides',
      'Kiire ja lihtne juurdepääs tooteandmetele',
      'Tõhusad otsinguvõimalused ja filtrid',
      'Lihtne viis lisada materjali (nt korduma kippuvad küsimused, tooteesitlused)',
    ],
    goals: [
      'Suurendada müügitulemusi ja kliendirahulolu',
      'Parandada oma meeskonna tootlikkust',
      'Vähendada vigade arvu ja parandada andmete täpsust',
      'Optimeerida müügiprotsesse ja ajakasutust',
    ],
    quotes: [
      '"Kiire ligipääs täpsele tooteinfole on minu edu võti."',
      '"Ma vajan tööriistu, mis aitavad mul olla efektiivsem ja pakkuda paremat teenust oma klientidele."',
      '"Mida vähem aega ma kulutan andmete otsimisele, seda rohkem saan keskenduda müügile."'
    ],
  };

  getPersona(): Persona {
    return this.personaData;
  }
}
