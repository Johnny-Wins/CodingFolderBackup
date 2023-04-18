class Choice:

    def __init__(self, explanation, examples):
        self.explanation = explanation
        self.examples = examples

        self.exampleString = ""
        for newEx in examples:
            self.exampleString += newEx
            self.exampleString += "\n"
        


charConcepts = Choice("The overall idea of what your character is; can be somewhat general, but should evoke an archetype that will inform how your character behaves.",
                      
                      ("• Activist - Journalist, blogger, lobbyist, malcontent.",
                       "• Artist - Writer, dancer, painter, musician.",
                       "• Athlete - Team player, personal trainer, physical artisan, thrill-seeker.",
                       "• Caretaker - Parent, teacher, social worker, medical professional.",
                       "• Criminal - Gang member, con artist, drug dealer, thief.",
                       "• Executive - Tycoon, manager, facilitator, power-player. ",
                       "• Guardian - Cop, security guard, conspiracy theorist, social watchdog. ",
                       "• Intellectual - Scholar, professor, philosopher, social critic.",
                       "• Kid - Child, student, innocent, gutter-punk. ",
                       "• Laborer - Factory worker, sales clerk, roadie, construction worker.",
                       "• Mystic - Priest/ ess, hermit, shaman, enlightened weirdo.",
                       "• Night-Owl - Bartender, bouncer, club-goer, celebrity.",
                       "• Rebel - Vagabond, outlaw, urban tribalist, subculture devotee. ",
                       "• Technician - Mechanic, lab tech, craftsman, computer geek."))

traditions = Choice("A council of 9 powerful traditions which have banded together against the technocracy.",
                    
                    ("• Akashayana/Akashic Brotherhood - Masters of mind, body, and spirit through the Arts of personal discipline. Affinity Spheres: Mind or Life",
                     "• Celestial Chorus - Sacred singers who give a human Voice to the Divine Song. Affinity Spheres: Prime, Forces, or Spirit",
                     "• Cult of Ecstasy/ Sahajiya - Visionary seers who transcend limitations through sacred experience. Affinity Spheres: Time, Life, or Mind",
                     "• Dreamspeakers/ Kha'vadi - Preservers and protectors of both the Spirit Ways and the Earthly cultures that have been looted, abandoned, and oppressed. Affinity Spheres: Spirit, Forces, Life, or Matter  ",
                     "• Euthanatoi /Chakravanti - Disciples of mortality who purge corruption and bring merciful release from suffering. Affinity Spheres: Entropy, Life, or Spirit",
                     "• Order of Hermes - Rigorous masters of High Magick and the Elemental Arts. Affinity Spheres: Forces ",
                     "• Society of Ether/Sons of Ether - Graceful saviors of scientific potential. Affinity Spheres: Matter, Forces, or Prime",
                     "• Verbena - Primal devotees of rough Nature and mystic blood. Affinity Spheres: Life or Forces",
                     "• Virtual Adepts - Reality-hackers devoted to rebooting their world. Affinity Spheres: Correspondence/Data or Forces"))

technocracy = Choice("The forces of science and reason which oppress the sleeping masses of humanity.",
                     
                    ("• Iteration X - Perfectors of the human machine. Affinity Spheres: Forces, Matter, or Time",
                    "• New World Order - Custodians of social order and global stability. Affinity Spheres: Mind or Correspondence/ Data",
                    "• Progenitors - Innovators dedicated to the potential of organic life. Affinity Spheres: Life or Prime",
                    "• Syndicate - Masters of finance, status, and the power of wealth. Affinity Spheres: Entropy, Mind, or Primal Utility",
                    "• Void Engineers - Explorers and protectors of extradimensional space. Affinity Spheres: Dimensional Science, Correspondence, or Forces"))

diaspora = Choice("")

affiliation = Choice("The group your character is most connected to or inspired by.",(traditions,technocracy,diaspora))

print(charConcepts.exampleString)
print(charConcepts.examples[3])