import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailService {
  public cards = [
    {
      id: "0",
      cardImg: 'assets/images/amanda-bynes.jpg',
      subTitle: "Amanda Bynes",
      title: "Amanda Bynes",
      content: 'It all started in 2012 of April when Amanda Bynes was arrested for driving under the influence (DUI) in West Hollywood, CA. Apparently, she was pulled over after hitting a stopped police car. After being arrested, she was refused a test that would have determined if she was either drunk or using drugs. In April, she was accused of hitting another car on the San Fernando Valley 101 Freeway and fleed the scene. On June, she plead her case directly to former president Barack Obama on Twitter. Fortunately, she was found not guilty to the charge. August 5, Bynes was accused of another hit-and-run, this time on Ventura Boulevard. On September, she was charged with two counts of hit-and-run and was sent to jail if convicted of both misdemeanors. She was not found guilty... March 2013, she tweeted that she wanted the rapper Drake to "murder [her] vagina" and then later deleted that tweet. May 2013 was very eventful when she lashed Rihanna on Twitter about Chris Brown beating Rihanna. She also sued her family for money laundering/unethical manager work, implying that she was no longer on speaking terms with her parents. She then later went on wig shopping. And then on May 2013, she also sued the NYPD for raided her apartment, illegally. She also said that her hatred towards Rihanna on Twitter were fake...',
    },
    {
      id: "1",
      cardImg: 'assets/images/britney-spears.jpg',
      subTitle: "Britney Spears",
      title: "Britney Spears",
      content: 'Britney Spears meltdown had already started when she filed for divorce from K-Fed in November 2006. On the same month, she was spotted partying with Paris Hilton and Lindsay Lohan. The notorious trio went viral when they were photographed inside Paris car. Occassionally, Britney was donned without her panties and carried her Red Bull Energy Drinks, had a good time partying. On Feburary 2007, she tragically shaved her head and then attacked a paparazzi with an umbrella. On several months, she was sported many wigs and dodged paparazzis. On September 2007, her "Gimme More" performance at the 2007 Video Music Awards was bombed with critics, calling her performance "lazy," "lethargic," and "flat." In the early 2008, she was unleashing her British accent and then was taken to a psychatric hospital before her conservatorship took her freedom. On 2018-2021, she was abused by her father Jamie Spears and his team and took her son away - Sean and Preston Federline. The movement called #FreeBritney outcried the meltdown that Britney had, let Britney regained her freedom and suspended Jamie from the conservatorship work.',
    },
    {
      id: "2", 
      cardImg: 'assets/images/chad-johnson.jpg',
      subTitle: "Chad Johnson",
      title: "Chad Johnson",
      content: 'Chad Johnson was known for his notoriety status as the villain on the Bachelorette and Bachelor in Paradise. His villainous status rise to both public and private views when he started angrily tweeted about each Bachelor in Paradise cast, included his awkward involvement with Daniel Maguire, Sarah Herron, Nick Viall, and Tyler Cameron (who was not on Bachelor in Paradise). In 2020, he was officially charged in robbery, assault, and battery on his ex-girlfriend, well verbally. It was also reported when he was punching and screaming profanities, and then threw his ex-girlfriend phone. He was later placed on a TRO (temorary restraining order) per California law. Following after his public meltdown, he transitioned his reality TV career into a porn actor to get money for his past charges.',
    },
    {
      id: "3", 
      cardImg: 'assets/images/justin-bieber.jpg',
      subTitle: "Justin Bieber",
      title: "Justin Bieber",
      content: '"Baby Baby Baby Noooooooooo!!!!" Justin Bieber went a lot of troubles before he came clean and hitched Hailey Bieber. On New Years Day in 2013, a photographer was murdered crossing the street after taking photos of Biebers Ferrari while Bieber wasnt present at the scene. Later in that same year, he was dragged by Olivia Wilde for going shirtless in public, he was spotted through a airport terminal without his shirt. At that same city of London, he was having a shouting match with a paparazzi. Bieber, on the same year, lost his pet monkey when the capuchin was taken by officials in Germany at the animal shelter in Munich. In April, he visited the Anne Frank House in Amsterdam where he hoped Anne Frank for wishing that she have been a "Belieber," which ticked off a lot of Anne Frank Preservation Organization fans... 2014 kicked with a new year, but for Bieber, he was being investigated into a report of egg-throwing at a neighbor house, which landed him into a whopping two-years probation and 12 weekly anger management sessions. Finally, Bieber was arrested on suspicion of DUI and drag racing in Miami and was eventually pleaded guilty of careless driving and resisting arrest. Summer of 2014, Bieber was accused of blurted out racist terminologies and singing at the same time when he was at an young age. In July 2014, his neighbors filed complaints to police that his house parties caused a ruckus. Add the ATV accident in Ontario and his altercation with Orlando Bloom made his lifetime for the summer. In 2016, he punched a fan in Barcelona after a fan was about to greet him. He was also been kicked out of the Mayan City of Tulum for climbing an El Castillo and disrespecting to the Mayan Gods.',
    },
    {
      id: "4", 
      cardImg: 'assets/images/kim-kardashian.jpg',
      subTitle: "Kim Kardashian",
      title: "Kim Kardashian",
      content: 'Keeping Up with Kim (and her scandalous life)! Kim Kardashian was infamously known for her alleged tape with Ray-J, titled the DVD "Kim Kardashian: Superstar," which lamded her into a reality show with her family, "Keeping Up With The Kardashians." Nothing much scandalous besides her alleged tape back then, but she was charged by the SEC for crypto advertisement with $1.3 million. Stay tuned for her scandalous roadblocks.',
    },
    {
      id: "5", 
      cardImg: 'assets/images/lindsay-lohan.jpg',
      subTitle: "Lindsay Lohan",
      title: "Lindsay Lohan",
      content: 'Oh Lindsay! What happened to your good ole Disney? In 2007, she was arrested and collared on a charge of DUI and possession of cocaine after losing control of her Mercedes Benz in a booze-fueled car wreck in Beverly Hills. That same month, she was taking custody in Santa Monica on suspicion of DUI and driving on a suspended license and cocaine use after she had a verbal altercation with a woman whom she chased in her SUV. April, she was pleaded guilty to misdemeanor cocaine use and DUI (again) and was sentenced to a day in jail and whopping 10 days of community service... In 2011, she was taken back to jail for diamond theft a $2,500 necklace from a Venice jewelry store and then later completed her probation and placed on informal probation for the necklace theft. Bonus points: Lohan and Vanessa Lachey was being photographed for playing kitchen knives. She was also following a Muslim refugee and was later punched for harassing a Muslim family.',
    },
    {
      id: "6", 
      cardImg: 'assets/images/miley-cyrus.jpg',
      subTitle: "Miley Cyrus",
      title: "Miley Cyrus",
      content: 'Her Disney days are not so "Mickey" when in 2008, her computer account was hacked and NSFW photos were leaked from her accounts, without her consent. That same month, she was criticized for her scandalous photoshoot for Vanity Fair. Disney then accused Vanity Fair of manipulating her to sell magazines and Conde Nast later took the hero image down from their website. The fame comedy decreased when she committed online bullying Selena Gomez and Demi Lovato by posting a vlog with her dance Mandy Jiroux mocked and parodied the newcomers. December 2010, she was caught taking salvia in a private video, which was later leaked by someone who stole or copied the clip from her friends camera. VMA 2013 was a lit year for her when she was twerking on Robin Thicke with her foam finger. Memes and dance classes were poking fun of Mileys twerking. In 2017, she was focusing on her rapping career which failed miserably, cited her rapping - misogynistic and flashy. In 2019, she was married to Liam Hemsworth and then later filed for divorce. It was reported when she and her dad, Billy Rae Cyrus are no longer on speaking terms.',
    },
    {
      id: "7",
      cardImg: 'assets/images/nicole-richie.jpg',
      subTitle: "Nicole Richie",
      title: "Nicole Richie",
      content: 'Early 2006 was a rough year for her. Having her health went down due to her "anorexic" shape, which later denied that she was anorexic and bulimic. Following in 2007, she was hospitalized for dehydration. But for legal woes, in October 2002, she was arrested following a brawl in an NYC nightclub but the charges were dropped. In Feburary 2003, she was checked herself into a rehab center following her arrest in Malibu for driving with a revoked license and possession of heroin. On August, she was sentenced to 3-year probation. December 2006, she was arrested for flunking her field sobriety test and was charged with DUI on State Route 134 in Burbank/Glendale area. 2007, she was sentenced to 4 day jailtime for 82 minutes and was enrolled in an 18-month anti-drinking education program. 2010, her probation was extended to March 2011 because she missed her anti-drinking class...',
    },
    {
      id: "8",
      cardImg: 'assets/images/olivia-hughes.jpg',
      subTitle: "Olivia Hughes",
      title: "Olivia Hughes",
      content: 'Since her college year at Indiana University-Purdue University Indianapolis in August 2019 was from rough to smooth on her, she was spotted binge-partying with her ex-best friends Andrea Capunay and Bhawna Yadav at Indianapolis nightlife after her friendship breakup with Myo Win. On Halloween 2019, she was basically drunk at Brothers Downtown and then when she got back to her friends apartment, her car was towed from someone else parking garage. In 2020, 2020 was a rough year for her: she and her ex-husband Mauricio Gamez announced their separation and subsequently dated "Are You The One" reality TV star, Hayden Weaver for a month; her 3 months stay at her parents house during the COVID lockdown and getting judged at, which prompted her to move back to Indy; her past love triangle with her ex-friend and Bachelor in Paradise Revian Chang and Revian ex-boyfriend and Olivia current husband Christian Hughes; Olivia shaved her head and then attacked a paparazzi with an umbrella by The Avenue; her meltdown at the zoo photoshoot; her Columbus North High School Homecoming Performance "Waste" was being criticized for her "lethargic," "lazy," and "underperformed" performance; her almost-friendship breakup with Andrea and her boyfriend Miguel Vaca; her constant custody battles against Mauricio for her kids; and was taken to the psychiatric hospital in Feburary 2021. The meltdown wasnt over when Olivia and Andrea started feuding each other after their friendship breakup due to Andrea toxic behaviors towards Olivia, that currently gone messy, big time, back in the summer of 2021. Her beef with Andrea has taking into a whole new level of pettiness with Olivia released her punk rock album "Fuck Toxic Friends" that savagely jabbed Andrea and Miguel, and her nemeses with explicit lyrics. Andrea then later commented on her podcast with her pal Rubi Giataca. Her feud with Andrea deepens when Olivia accused her of cheated on Miguel by hooking up with Sarah Tran boyfriend Austin and Stacey Nguyen boyfriend and Olivias coding tutor Jeff, and Sarah and Stacey and boyfriends guy friends from Indiana University Bloomington VSA (Vietnamese Student Association). Andrea has not commented about it yet.',
    },
    {
      id: "9",
      cardImg: 'assets/images/paris-hilton.jpg',
      subTitle: "Paris Hilton",
      title: "Paris Hilton",
      content: 'Paris Hilton is known for her famed party girl and heiress to the Hilton family. Having said that her public views had been a epic letdown back then, she went a lot of trouble. She was firstly seen being photographed with Lindsay Lohan and Britney Spears back in 2006 of November. That same year, her #sliving life was not "sliving" when she was arrested for DUI and had her license suspended. She was pulled over multiple times for continuing to drive with an invalid license. 2010, she was arrested again for possession of marijuana with her ex-boyfriend. She was charged with possession of marijuana and cocaine. She was pled guilty to drug possession and obstructing an officer and was received a probation, community service, and a fine. Fortunately, her release after jail time landed for her good behavior.',
    },
  ];
  constructor() {}

  getCard(cardId: String) {
    for (let i = 0; i < this.cards.length; i++) {
      const element = this.cards[i];
      if(element.id ==cardId) {
        return element;
      }
    }
  }
}
