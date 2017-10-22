

$(document).ready(function () {
    class SWSpells {
        constructor() {
            this.charmMonsterTable = `
                  <table class="rules-table">
                    <tr>
                      <th>Hit Dice</th>
                      <th>Chance to Break Charm*</th>
                    </tr>
                    <tr>
                      <td>Fewer than 2</td>
                      <td>5%</td>
                    </tr>
                    <tr>
                      <td>2–4</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>5–7</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>8–10</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>11+</td>
                      <td>80%</td>
                    </tr>
                    <tr>
                      <td colspan="2">*Per week</td>
                    </tr>
                  </table>
                `;

            this.confusionTable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (2d6)</th>
                      <th>Reaction</th>
                    </tr>
                    <tr>
                      <td>2–5</td>
                      <td>Attack caster &amp; caster’s allies</td>
                    </tr>
                    <tr>
                      <td>6–8</td>
                      <td>Stand baffled and inactive</td>
                    </tr>
                    <tr>
                      <td>9–12</td>
                      <td>Attack each other</td>
                    </tr>
                  </table>
                `;

            this.contactOtherPlaneTable = `
                  <table class="rules-table">
                    <tr>
                      <th>Plane of Existence</th>
                      <th>Max. # Questions</th>
                      <th>Knowledge Available</th>
                      <th>Wrong Result</th>
                      <th>Temporary Insanity*</th>
                    </tr>
                    <tr>
                      <td>3rd</td>
                      <td>3</td>
                      <td>25%</td>
                      <td>70%</td>
                      <td>1%</td>
                    </tr>
                    <tr>
                      <td>4th</td>
                      <td>4</td>
                      <td>30%</td>
                      <td>60%</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>5th</td>
                      <td>5</td>
                      <td>40%</td>
                      <td>50%</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>6th</td>
                      <td>6</td>
                      <td>50%</td>
                      <td>40%</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>7th</td>
                      <td>7</td>
                      <td>60%</td>
                      <td>30%</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>8th</td>
                      <td>8</td>
                      <td>70%</td>
                      <td>25%</td>
                      <td>45%</td>
                    </tr>
                    <tr>
                      <td>9th</td>
                      <td>9</td>
                      <td>80%</td>
                      <td>20%</td>
                      <td>55%</td>
                    </tr>
                    <tr>
                      <td>10th</td>
                      <td>10</td>
                      <td>85%</td>
                      <td>15%</td>
                      <td>65%</td>
                    </tr>
                    <tr>
                      <td>11th</td>
                      <td>11</td>
                      <td>90%</td>
                      <td>10%</td>
                      <td>75%</td>
                    </tr>
                    <tr>
                      <td>12th</td>
                      <td>12</td>
                      <td>95%</td>
                      <td>1%</td>
                      <td>85%</td>
                    </tr>
                    <tr>
                      <td colspan="5">*This chance is reduced by 5% for every level of the caster above 11th</td>
                    </tr>
                  </table>
                `;

            this.monsterSummoningITable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (1d6)</th>
                      <th>Monster Summoned*</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1d6 Giant Rats</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1d3 Dwarves (Goblins)</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1d3 Elves (Hobgoblins)</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1d6 Kobolds</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>1d3 Orcs</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>1d3 Skeletons</td>
                    </tr>
                    <tr>
                      <td colspan="2">*Chaotically-aligned casters might get the monster in parenthesis, at the Referee's discretion</td>
                    </tr>
                  </table>
                `;

            this.monsterSummoningIITable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (1d6)</th>
                      <th>Monster Summoned</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1d2 Hobgoblins</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1d2 Zombies</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1d2 Gnolls</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1d2 Bugbears</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>1d6 Orcs</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>1d6 Skeletons</td>
                    </tr>
                  </table>
                `;

            this.monsterSummoningIIITable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (1d6)</th>
                      <th>Monster Summoned</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1d4 Bugbears</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1d2 Harpies</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1d2 Ochre Jellies</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1d2 Were-rats</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>1d2 Wights</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>1d2 Wild Boar</td>
                    </tr>
                  </table>
                `;

            this.monsterSummoningIVTable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (1d6)</th>
                      <th>Monster Summoned</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1 Gargoyle</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1 Ogre</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1 Owlbear</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1 Shadow</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>1 Werewolf</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>1 Wraith</td>
                    </tr>
                  </table>
                `;

            this.monsterSummoningVTable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (1d6)</th>
                      <th>Monster Summoned</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1 Cockatrice</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1 Manticore</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1 Minotaur</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1 Ogre Mage</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>1 Salamander</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>1 Troll</td>
                    </tr>
                  </table>
                `;

            this.monsterSummoningVITable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (1d10)</th>
                      <th>Monster Summoned</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1 Black Dragon</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1 Chimera</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1 Efreeti</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1 Flesh Golem</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>1 Frost Giant</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>1 Hill Giant</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>1 Hydra (7 heads)</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>1 Mummy</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>1d2 Ogre Magi</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>1 White Dragon</td>
                    </tr>
                  </table>
                `;

            this.monsterSummoningVIITable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (1d10)</th>
                      <th>Monster Summoned</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>1d2 Chimerae</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>1 Fire Giant</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>1 Hydra (9 heads)</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>1 Iron Golem</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>1 Lich</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>1 Purple Worm</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>1 Red Dragon</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>1 Stone Golem</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>1 Storm Giant</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>1 Titan</td>
                    </tr>
                  </table>
                `;

            this.prismaticSphereTable = `
                  <table class="rules-table">
                      <tr>
                        <th>Layer</th>
                        <th>Effects of Color</th>
                        <th>Negated By</th>
                      </tr>
                      <tr>
                        <td>Red</td>
                        <td>Causes 12 points of damage when touched. Stopsany magic arrows or missiles (including the spellMagic Missile).</td>
                        <td>Ice Storm or other cold-based attack</td>
                      </tr>
                      <tr>
                        <td>Orange</td>
                        <td>Causes 24 points of damage when touched. Stopsarrows and any other non-magical missile.</td>
                        <td>Lightning Bolt or other electrical attack</td>
                      </tr>
                      <tr>
                        <td>Yellow</td>
                        <td>Causes 48 points of damage when touched. Blocksall breath weapons.</td>
                        <td>Magic Missile spell or a magical arrow</td>
                      </tr>
                      <tr>
                        <td>Green</td>
                        <td>Causes death (saving throw allowed) when touched.Blocks any scrying and detection-type spells fromseeing within.</td>
                        <td>Passwall spell or other earth-moving magic</td>
                      </tr>
                      <tr>
                        <td>Blue</td>
                        <td>Turns flesh to stone when touched (saving throwallowed). Blocks all divine (Clerical) magic frompassing through.</td>
                        <td>Disintegrate spell (may be from a wand or item)</td>
                      </tr>
                      <tr>
                        <td>Indigo</td>
                        <td>Causes death and destroys the soul utterly whentouched (saving throw allowed).</td>
                        <td>Dispel Magic</td>
                      </tr>
                      <tr>
                        <td>Violet</td>
                        <td>Causes permanent insanity when touched. Blocks allarcane (Magic-User) spells.</td>
                        <td>Continual Light</td>
                      </tr>
                  </table>
                `;

            this.reincarnationTable = `
                  <table class="rules-table">
                    <tr>
                      <th>Die Roll (1d20)</th>
                      <th>Reincarnated as...</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Bugbear</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Centaur</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Dog, Cat, or Wolf</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Dwarf</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Elf</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Gnoll</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Goblin</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Grey Ooze</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Harpy</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Hobgoblin</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Human</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Kobold</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Lizard man</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Lycanthrope (Werewolf or other)</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Minotaur</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Ogre</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>Ogre Mage</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Orc</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Troll</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>Wyvern</td>
                    </tr>
                  </table>
                `;

            this.sleepTable = `
                  <table class="rules-table">
                    <tr>
                      <th>Hit Dice of Victims</th>
                      <th>Number Affected</th>
                    </tr>
                    <tr>
                      <td>1 or less</td>
                      <td>4d4</td>
                    </tr>
                    <tr>
                      <td>1+ to 2+</td>
                      <td>2d6</td>
                    </tr>
                    <tr>
                      <td>3 to 3+</td>
                      <td>1d6</td>
                    </tr>
                    <tr>
                      <td>4 to 4+</td>
                      <td>1</td>
                    </tr>
                  </table>
                `;

            this.spellArray = [
                [1, 'Aerial Servant', 'Cleric', 7, 'n/a', 'Until completed or insanity', '<p>This spell summons a powerful creature from the elemental planes of air, to fetch and return one thing (or creature) to the caster. Only a creature with a Strength of 18 can fight its way from the servant’s grasp, and even then the chance is not likely to be greater than 50%. The servant can carry up to 500 pounds in weight. An aerial servant has the following attributes: HD 16, AC 3 [16], Atk Bonus +17, Atk 1 (4d4), Move 240 feet. If the servant is frustrated in its efforts to bring the desired object to the caster, it will become insane, returning and attacking him or her.</p>'],
                [2, 'Animal Growth', 'Magic-User', 5, '120 feet', '2 hours', '<p>This spell causes 1d6 normal creatures to grow immediately to giant size. While the spell lasts, the affected creatures can attack as per a giant version of themselves.</p>'],
                [3, 'Animate Dead', 'Magic-User', 5, 'Referee’s Discretion', 'Permanent', '<p>This spell animates skeletons or zombies from dead bodies. 1d6 undead are animated per level of the caster above 8th. The corpses remain animated until slain.</p>'],
                [4, 'Animate Object', 'Cleric', 6, '60 feet', '1 hour', '<p>The Cleric “brings to life” inanimate objects such as statues, chairs, carpets, and tables. The objects follow the Cleric’s commands, attacking foes or performing other actions on the caster’s behalf. The Referee must determine the combat attributes of the objects (such as armor class, speed, hit dice, and to-hit bonuses) on the spur of the moment. A stone statue, as a basic example, might have AC of 1 [18], attack as a creature with 7–9 HD, and inflict 2d8 points of damage. Wooden furniture would be considerably less dangerous.</p>'],
                [5, 'Anti-Magic Shell', 'Magic-User', 6, 'Caster', '2 hours', '<p>An invisible bubble of force surrounds the caster, impenetrable to magic. Spells and other magical effects cannot pass into or out of the shell. The shell is ten feet in radius.</p>'],
                [6, 'Astral Spell', 'Magic-User', 9, '100 miles (above ground), 100 yards (below ground)', '2 hours', '<p>The caster projects his or her astral form into other places; the astral form is invisible to all creatures but those also traveling the astral plane of existence. The spell has a duration of two hours. If the caster’s physical body is moved more than 100 miles from its original location while the astral form is away, the link is sundered and the caster’s soul becomes lost in the beyond. (If the caster’s body is underground, it need only be moved 100 yards before the connection is broken.)</p><p>The astral form is capable of casting spells, but there is a 5% chance per spell level that the spell will fail. Additionally, there is a 2% chance per spell level of the attempted spell that the astral spell itself will falter as a result of the spell casting, and the astral form will return to the physical body. When traveling in astral form upon the earth, the astral form may travel as fast as 100 miles per hour per level above 18th. If the form is traveling underground, its top speed is much slower: 120 feet per 10-minute turn. When traveling into the deeper regions beyond the earth, speed and distance are obviously not measured in miles.</p>'],
                [7, 'Blade Barrier', 'Cleric', 6, '60 feet', '12 hours', '<p>Mystical blades, whirling and thrusting, form a lethal circle around the spell’s recipient, at a radius of 15 feet. The barrier inflicts 7d10 points of damage to anyone trying to pass through.</p>'],
                [8, 'Bless', 'Cleric', 2, 'Only upon a character not in combat.', '1 hour (6 turns)', '<p>This spell grants its recipient a +1 to attack rolls (and improves morale, if the recipient is not a player character). The recipient cannot already be in combat when the spell is cast.</p>'],
                [9, 'Charm Monster', 'Magic-User', 4, '60 feet', 'See below', '<p>This spell operates in the same manner as Charm Person, but can affect any one living creature, including powerful monsters. For monsters of fewer than 3 hit dice, up to 3d6 can be affected. Monsters have one chance per week to break free of the charm, with the probability based on their hit dice (as shown on the following table).</p>' + this.charmMonsterTable],
                [10, 'Charm Person', 'Magic-User', 1, '120 feet', 'Until dispelled', '<p>This spell affects living bipeds of human size or smaller, such as goblins or dryads. If the spell succeeds (saving throw allowed), the unfortunate creature falls under the caster’s influence.</p>'],
                [11, 'Charm Plants', 'Magic-User', 7, '120 feet', 'Until dispelled', '<p>If the plant fails a saving throw (and it need not be intelligent), it will obey the caster to the extent of its ability. The spell affects one large tree, six man-sized plants, twelve plants three feet tall, or twenty-four flower-sized plants.</p>'],
                [12, 'Clairaudience', 'Magic-User', 3, '60 feet', '2 hours', '<p>Clairaudience allows the caster to hear through solid stone (limiting range to 2 feet or so) and other obstacles, any sounds within a range of 60 feet. The spell’s effect cannot pass through even a thin sheeting of lead, however, for this metal blocks it utterly. The spell can be cast through a crystal ball.</p>'],
                [13, 'Clairvoyance', 'Magic-User', 3, '60 feet', '2 hours', '<p>Clairvoyance allows the caster to see through solid stone (limiting range to 2 feet or so) and other obstacles, anything within a range of 60 feet. The spell’s effect cannot pass through even a thin sheeting of lead, however, for this metal blocks it completely.</p>'],
                [14, 'Clone', 'Magic-User', 8, 'Close', 'Permanent', '<p>By this eerie and disturbing spell, a piece of flesh, taken from a living person, is grown into an exact duplicate of the person at the time the flesh was removed. (Whether this requires a laboratory and how much time is needed to regrow the clone depend upon the spell formula and the Referee’s discretion.) If a clone is created while its parentcreature still lives, the clone will seek to kill its original. If it fails to achieve this goal, both the clone and the original will become insane.</p>'],
                [15, 'Cloudkill', 'Magic-User', 5, 'Moves 6 feet per minute', '1 hour', '<p>Foul and poisonous vapors boil from the thin air, forming a cloud 15 feet in radius. The cloud moves directly forward at a rate of 6 feet per minute unless its direction or speed is affected by winds. Unusually strong gusts can dissipate and destroy the cloud. Poison-laden, the horrid mist is heavier than air, and thus sinks down any pits or stairs in its path. Even touching the cloud (much less breathing it) requires a saving throw to avoid immediate death unless the creature has 5 or more hit dice.</p>'],
                [16, 'Commune', 'Cleric', 5, 'Caster', '3 questions', '<p>Higher powers grant an answer to three questions the caster poses to them. Higher powers do not like being constantly interrogated by mere mortals, so use of the spell should be limited to once per week or so by the Referee.</p>'],
                [17, 'Confusion', 'Magic-User', 4, '120 feet', '2 hours', '<p>This spell confuses people and monsters, making them act randomly. On a roll of 2d6, the creatures will do the following:</p>' + this.confusionTable + '<p>The effects of the confusion may shift every 10 minutes or so, and the dice are once again rolled.</p><p>The spell affects 2d6 creatures, plus an additional creature for every caster level above 8th. Creatures of 3 hit dice or fewer are automatically affected by the spell, and it takes effect instantly. Creatures of 4 hit dice or more automatically overcome the confusion effect as it builds up to its full power (1d12 minutes, minus the caster’s level), and only then are they permitted a saving throw. Eventually, these creatures are likely to succumb to the confusion, for they must continue to make another saving throw every 10 minutes until the spell’s two-hour duration has run its course.</p>'],
                [18, 'Conjuration of Animals', 'Cleric', 6, '30 feet', '1 hour', '<p>The Cleric conjures up normal animals to serve as allies: 1 creature larger than a man (such as an elephant), 3 animals the size of a man or horse (such as a lion), or 6 animals smaller than a man (such as a wolf). The animals obey the caster’s commands.</p>'],
                [19, 'Conjuration of Demons', 'Magic-User', 7, '10 feet', 'Referee’s discretion', '<p>This spell summons a demon or other fiend (such as a devil) from the lower planes of existence. The spell provides no protection whatsoever against the wrath of the summoned creature, and the Magic-User should be versed in the lore of pentacles and other magical means of hedging out demons. Gaining the demon’s assistance is beyond the spell’s power, coming down to a matter of negotiations and threats between the caster and the fiend.</p>'],
                [20, 'Conjuration of Elementals', 'Magic-User', 5, '240 feet', 'Until dispelled or slain', '<p>The caster summons a 16 HD elemental (any kind) from the elemental planes of existence, and binds it to follow commands. The elemental obeys the caster only for as long as the caster concentrates on it; and when the caster ceases to concentrate, even for a moment, the elemental is released and will attack its former master.</p>'],
                [21, 'Contact Other Plane', 'Magic-User', 5, 'None', 'Number of “Yes/No” questions', '<p>The caster creates a mental contact with the planes, forces, powers, and geometries of the beyond, in order to gain affirmative or negative answers to the questions being contemplated. The spell’s effects depend upon how deeply the caster quests into the various planes of existence. The caster must decide how “far” into the planes of existence the contact will be attempted. The number of planes in “depth” that the caster chooses will affect the number of yes or no questions that can be asked, the chance that the knowledge is available at that level, the chance of receiving a wrong answer, and the chance that the caster will become temporarily insane from the experience. Temporary insanity lasts for as many weeks as the “number” of the plane where the caster’s sanity failed… or perhaps was deliberately removed.</p>' + this.contactOtherPlaneTable],
                [22, 'Continual Light', 'Magic-User', 2, '120 feet', 'Permanent until dispelled', '<p>The targeted person or object produces light as bright as sunlight (and with the same effects as sunlight), to a radius of 120 feet.</p>'],
                [23, 'Control Weather (Cleric)', 'Cleric', 7, 'Referee’s discretion', 'Referee’s discretion', '<p>The caster can summon or stop rainfall, create unusually high or low temperatures, summon or disperse a tornado, clear the sky of clouds, or summon clouds into being.</p>'],
                [24, 'Control Weather (Magic-User)', 'Magic-User', 6, 'Referee’s discretion', 'Referee’s discretion', '<p>The caster can summon or stop rainfall, create unusually high or low temperatures, summon or disperse a tornado, clear the sky of clouds, or summon clouds into being.</p>'],
                [25, 'Create Water', 'Cleric', 4, 'Close', 'Immediate', '<p>This spell creates a one-day supply of drinking water for 24 men (or, for game purposes, horses). At 9th level the amount of water doubles, and it doubles again at every level thereafter.</p>'],
                [26, 'Create Food', 'Cleric', 5, 'Close', 'Immediate', '<p>This spell creates a one-day supply of food for 24 humans (or the like). At 9th level the amount of food doubles, and it doubles again at every level thereafter.</p>'],
                [27, 'Cure Disease', 'Cleric', 3, 'Touch', 'Immediate', '<p>Cures the spell’s recipient of any diseases, including magically inflicted ones. An evil reversal of this spell allows a Chaotically aligned Cleric to cause disease.</p>'],
                [28, 'Cure Light Wounds', 'Cleric', 1, 'Touch', 'Immediate', '<p>Cures 1d6+1 hit points of damage. An evil reversal of this spell allows a Chaotically aligned Cleric to cause light wounds rather than curing them.</p>'],
                [29, 'Cure Serious Wounds', 'Cleric', 4, 'Touch', 'Immediate', '<p>Cures 2d6+2 hit points of damage. An evil reversal of this spell allows a Chaotically aligned Cleric to cause serious wounds.</p>'],
                [30, 'Darkness 15-foot Radius', 'Magic-User', 2, '120 feet', '1 hour', '<p>Darkness falls within the spell’s radius, impenetrable even to darkvision. A Light spell or Dispel Magic can be used to counteract the darkness.</p>'],
                [31, 'Darkvision', 'Magic-User', 3, '40 feet', '1 day', '<p>The recipient of the spell can see in total darkness for the length of the spell’s duration.</p>'],
                [32, 'Death Spell', 'Magic-User', 6, '240 feet', 'Causes normal death', '<p>Within a 60-foot radius, up to 2d8 creatures, with fewer than 7 hit dice each, perish.</p>'],
                [33, 'Delayed Blast Fireball', 'Magic-User', 7, '240 feet', 'Chosen by caster (up to 10 minutes)', '<p>This spell creates a normal fireball, but the blast can be delayed for a period of up to 10 minutes. The burst radius, per a normal fireball, is 20 feet, and damage is 1d6 per level of the caster. The blast shapes itself to the available volume (33,000 cubic feet), filling 33 10-foot x 10-foot x 10-foot cubical areas.</p>'],
                [34, 'Detect Evil (Cleric)', 'Cleric', 1, '120 feet', '1 hour', '<p>The caster detects any evil enchantments, evil intentions, evil thoughts, or evil auras within the spell’s range. Poison is not inherently evil and cannot be detected by means of this spell. Whether there is any distinction between “evil” and “Chaos” is left to the Referee; in most campaigns they are exactly the same.</p>'],
                [35, 'Detect Evil (Magic-User)', 'Magic-User', 2, '60 feet', '20 minutes', '<p>The caster detects any evil enchantments, evil intentions, evil thoughts, or evil auras within the spell’s range. Poison is not inherently evil and cannot be detected by means of this spell. Whether there is any meaningful distinction between “evil” and “Chaos” is left to the Referee; in most campaigns they are exactly the same.</p>'],
                [36, 'Detect Invisibility', 'Magic-User', 2, '10 feet per caster level', '1 hour', '<p>The caster can perceive invisible objects and creatures, even those lurking in the Astral or Ethereal planes of existence.</p>'],
                [37, 'Detect Magic (Cleric)', 'Cleric', 1, '60 feet', '20 minutes', '<p>The caster can perceive, in places, people, or things, the presence of a magical spell or enchantment. For example, magical items may be discovered in this fashion, as can the presence of a charm secretly laid upon a person.</p>'],
                [38, 'Detect Magic (Magic-User)', 'Magic-User', 1, '60 feet', '20 minutes', '<p>The caster can perceive, in places, people, or things, the presence of a magical spell or enchantment. For example, magical items may be discovered in this fashion, as can the presence of a charm secretly laid upon a person.</p>'],
                [39, 'Dimension Door', 'Magic-User', 4, '10 feet (360-foot teleport distance)', '1 hour', '<p>Dimension Door is a weak form of teleportation, a spell that can be managed by lesser magicians who cannot yet manage the Teleport spell. The caster can teleport himself, an object, or another person, with perfect accuracy to the stated location, as long as it is within the spell’s range.</p>'],
                [40, 'Disintegrate', 'Magic-User', 6, '60 feet', 'Permanent — cannot be dispelled', '<p>The caster defines one specific target such as a door, a peasant, or a statue, and it disintegrates into dust. Magical materials are not disintegrated, and living creatures (such as the aforementioned peasant) are permitted a saving throw.</p>'],
                [41, 'Dispel Evil', 'Cleric', 5, '30 feet', '10 minutes against an item', '<p>This spell is similar to the Magic-User spell Dispel Magic, but affects only evil magic. Also unlike the Dispel Magic spell, Dispel Evil functions (temporarily) against evil “sendings,” possibly including dreams or supernatural hunting-beasts. The power of an evil magic item is held in abeyance for 10 minutes rather than being permanently dispelled. Evil spells are completely destroyed.</p><p>As with Dispel Magic, the chance of successfully dispelling evil is a percentage based on the ratio of the level of the dispelling caster over the level of original caster (or HD of the monster). Thus, a 9th-level Cleric attempting to dispel an evil charm cast by a 12th-level Cleric has a 75% chance of success (9/12 = .75, or 75%). If the 12th-level Cleric was dispelling the 9th-level Cleric’s charm, success would be certain (12/9 = 1.33, or 133%).</p>'],
                [42, 'Dispel Magic', 'Magic-User', 3, '120 feet', '10 minutes against an item', '<p>Dispel Magic, although not powerful enough to permanently disenchant a magic item (nullifies for 10 minutes), can be used to completely dispel most other spells and enchantments.</p><p>The chance of successfully dispelling magic is a percentage based on the ratio of the level of the dispelling caster over the level of original caster (or HD of the monster). Thus, a 6th-level Magic-User attempting to dispel a charm cast by a 12th-level Magic-User has a 50% chance of success (6/12 = .50, or 50%). If the 12th-level Magic-User was dispelling the 6th-level Magic-User’s charm, success would be certain (12/6 = 2.00, or 200%).</p>'],
                [43, 'Earthquake', 'Cleric', 7, 'Referee’s discretion', 'Immediate', '<p>The Cleric causes a powerful earthquake in an area 60x60 feet plus an additional 10 feet (in both length and width) per three levels above 17th. The quake topples walls, causes rockslides, and opens gaping fissures in the earth. Any creature caught in the quake has a 1 in 6 chance of falling into the depths of the earth and being killed. The earthquake’s tremors do not extend in any way beyond the spell’s area of effect.</p>'],
                [44, 'Enchant Item', 'Magic-User', 6, 'Touch', 'Permanent', '<p>This spell is used in the creation of a magical item, in addition to whatever research, special ingredients, or other efforts the Referee may determine are necessary for the task.</p>'],
                [45, 'ESP (Detect Thoughts)', 'Magic-User', 2, '60 feet', '2 hours', '<p>The caster can detect the thoughts of other beings at a distance of 60 feet. The spell cannot penetrate more than two feet of stone, and is blocked by even a thin sheet of lead.</p>'],
                [46, 'Explosive Runes', 'Magic-User', 3, 'Written on parchment', 'Permanent', '<p>The Magic-User scribes a rune onto parchment, vellum, or paper as a deadly trap. If anyone other than the caster reads the rune, the sigil explodes into fire, automatically dealing 4d6 points of damage to anyone directly in front of it. The parchment or book upon which the rune was scribed will also be destroyed. An explosive rune can be detected, bypassed, and even removed by a higher-level Magic-User. Any Magic-User at least two levels higher than the rune’s creator has a 60% chance to detect it, a 75% chance to bypass it (if it is detected), and a 100% chance to remove it (if it is successfully detected and bypassed).</p>'],
                [47, 'Extension I', 'Magic-User', 4, 'Caster', 'See below', '<p>Extension I lengthens the duration of another of the caster’s spells by 50%. Only spells of levels 1–3 can be affected by Extension I.</p>'],
                [48, 'Extension II', 'Magic-User', 5, 'Caster', 'See below', '<p>Extension II lengthens the duration of another of the caster’s spells by 50%. Only spells of levels 1–4 can be affected by Extension II.</p>'],
                [49, 'Extension III', 'Magic-User', 6, 'Caster', 'See below', '<p>Extension III doubles the duration of another of the caster’s spells. Spells of level 1–5 can be affected by Extension III.</p>'],
                [50, 'Fear', 'Magic-User', 4, '240 feet', '1 hour', '<p>This spell causes the creatures in its cone-shaped path to flee in horror if they fail a saving throw. If they do so, there is a 60% chance that they will drop whatever they are holding. The cone extends 240 feet to a base 120 feet across.</p>'],
                [51, 'Feeblemind', 'Magic-User', 5, '240 feet', 'Permanent until dispelled', '<p>Feeblemind is a spell that affects only Magic-Users. The saving throw against the spell is made at a -4 penalty, and if the saving throw fails, the targeted Magic-User becomes feeble of mind until the magic is dispelled.</p>'],
                [52, 'Find the Path', 'Cleric', 6, 'Caster', '1 hour +10 minutes/level; 1 day outdoors', '<p>The caster perceives the fastest way out of an area, even if the area is designed to be difficult to navigate, such as a labyrinth. Outdoors the spell has greater power, lasting a full day.</p>'],
                [53, 'Find Traps', 'Cleric', 2, '30 feet', '20 minutes (2 turns)', '<p>The caster can perceive both magical and non-magical traps at a distance of 30 feet.</p>'],
                [54, 'Finger of Death', 'Cleric', 5, '120 feet', 'Immediate', '<p>This spell kills a single creature (saving throw applies). Misusing the spell is an evil act that will likely invoke divine retribution of some kind.</p>'],
                [55, 'Fireball', 'Magic-User', 3, '240 feet', 'Instantaneous', '<p>A bead-like missile shoots from the caster’s finger, to explode, at the targeted location, in a furnace-like blast of fire. The burst radius is 20 feet, and damage is 1d6 per level of the caster. The blast fills 33,000 cubic feet (33 ten-foot x ten-foot x ten-foot cubical areas) but shapes itself to the available volume. A successful saving throw means that the target takes only half damage.</p>'],
                [56, 'Fly', 'Magic-User', 3, 'Touch', '1 turn/level + 1d6 turns', '<p>This spell imbues the Magic-User with the power of flight, with a movement rate of 120 feet per round. The Referee secretly rolls the 1d6 additional turns; the player does not know exactly how long the power of flight will last.</p>'],
                [57, 'Gate', 'Magic-User', 9, 'Near the caster', 'See below', '<p>A Gate spell creates an opening to another plane of existence and summons forth a specified, tremendously powerful being from the other plane, including gods, demi-gods, demons, etc. The caster must know the name of the creature being summoned or the spell will fail. There is a 5% chance that the wrong being might be summoned forth, and (regardless whether the summoned being is the right one or not) there is a 5% chance that it will lack interest in the situation and return through the gate. The summoned being is not necessarily friendly to the caster, and may even be extremely annoyed.</p>'],
                [58, 'Geas', 'Magic-User', 6, '30 feet', 'Until task is completed', '<p>If the spell succeeds (saving throw cancels), the caster may set a task for the spell’s victim. If the victim does not diligently work at performing the task, the refusal will cause weakness (50% reduction in strength), and trying to ignore the geas eventually causes death.</p>'],
                [59, 'Hallucinatory Terrain', 'Magic-User', 4, '240 feet', 'Until touched (other than by ally) or dispelled', '<p>This spell changes the appearance of the terrain into the semblance of what the caster desires. A hill can be made to disappear, or it could be replaced with an illusory forest, for example.</p>'],
                [60, 'Haste', 'Magic-User', 3, '240 feet', '30 minutes', '<p>In an area with a radius of 60 feet around the point where the spell is targeted, as many as 24 creatures become able to move and attack at double normal speed.</p>'],
                [61, 'Hold Monster', 'Magic-User', 5, '120 feet', '1 hour (+10 minutes/level)', '<p>The caster targets 1d4 creatures, which are completely immobilized (saving throw applies). The caster may also target a single creature, in which case the saving throw is made with a penalty of -2.</p>'],
                [62, 'Hold Person (Cleric)', 'Cleric', 2, '180 feet', '9 turns', '<p>The caster targets 1d4 persons (according to the same parameters as the Charm Person spell), who are completely immobilized (saving throw applies). The caster may also target a single person, in which case the saving throw is made with a penalty of -2.</p>'],
                [63, 'Hold Person (Magic-User)', 'Magic-User', 3, '120 feet', '1 hour (+10 minutes/level)', '<p>The caster targets 1d4 persons (according to the same parameters as the Charm Person spell), who are completely immobilized (saving throw applies). The caster may also target a single person, in which case the saving throw is made with a penalty of -2.</p>'],
                [64, 'Hold Portal', 'Magic-User', 1, 'Referee’s Discretion', '2d6 turns', '<p>This spell holds a door closed for the spell’s duration or until dispelled. Creatures with magic resistance can shatter the spell without effort.</p>'],
                [65, 'Holy Word', 'Cleric', 7, '40-foot radius', 'Immediate', '<p>The speaking of a Holy Word dramatically affects all those within the range of its divine power. Creatures of fewer than 5 hit dice are slain, creatures of 5-8 hit dice are stunned for 2d10 turns, and creatures with 9-12 hit dice are deafened for 1d6 turns. Creatures with 13+ hit dice are unaffected but probably impressed.</p>'],
                [66, 'Ice Storm', 'Magic-User', 4, '120 feet', '1 round', '<p>A whirling vortex of ice, snow, and hail forms in a cube roughly 30 feet across. Massive hailstones inflict 3d10 hit points of damage (no saving throw) to all within the area.</p>'],
                [67, 'Insect Plague', 'Cleric', 5, '480 feet', '1 day', '<p>This spell works only outdoors. A storm of insects gathers, and goes wherever the caster directs. The cloud covers approximately 400 square feet (20 feet by 20 feet, with roughly corresponding height). Any creature of 2 HD or fewer that is exposed to the cloud of insects flees in terror (no saving throw).</p>'],
                [68, 'Invisibility', 'Magic-User', 2, '240 feet', 'Until dispelled or an attack is made', '<p>The object of this spell, whether a person or a thing, becomes invisible to both normal sight and darkvision. The result is that an invisible creature cannot be attacked unless its approximate location is known, and all attacks are made at -4 to hit. If the invisible creature makes an attack, the spell is broken. Otherwise, it lasts until dispelled or removed by the caster.</p>'],
                [69, 'Invisibility 10-Foot Radius', 'Magic-User', 3, '240 feet', 'Until dispelled or an attack is made', '<p>Like the Invisibility spell, Invisibility 10-Foot Radius makes the target creature or object invisible to normal sight and darkvision. It also, however, throws a radius of invisibility around the recipient, which moves with him/her/it. Nothing inside the radius of invisibility can be attacked unless its approximate location is known, and all attacks are made at -4 to hit. If an invisible creature makes an attack, the spell is broken. Otherwise, it lasts until dispelled or removed by the caster.</p>'],
                [70, 'Invisible Stalker', 'Magic-User', 6, 'Close', 'Until mission is completed', '<p>This spell summons (or perhaps creates) an invisible stalker, an invisible being with 8 HD. (See the Monster section for more details.) The stalker will perform one task as commanded by the caster, regardless of how long the task may take or how far the stalker may have to travel. The stalker cannot be banished by means of Dispel Magic; it must be killed in order to deter it from its mission.</p>'],
                [71, 'Knock', 'Magic-User', 2, '60 feet', 'Immediate', '<p>This spell unlocks and unbars all doors, gates, and portals within its range, including those held or locked by most magic.</p>'],
                [72, 'Legend Lore', 'Magic-User', 6, 'Caster', 'See below', '<p>Over the course of long and arduous magical efforts (1d100 days), the caster gains knowledge about some legendary person, place, or thing. The spell’s final result may be no more than a cryptic phrase or riddle, or it might be quite specific.</p>'],
                [73, 'Levitate', 'Magic-User', 2, '20 feet/level', '1 turn/level', '<p>This spell allows the Magic-User to levitate himself, moving vertically up or down, but the spell itself provides no assistance with lateral movement. A wall, cliff side, or ceiling could, of course, be used to pull along hand-over-hand. Levitation allows up- or downward movement at a rate of up to 6 feet per minute (60 feet per turn), and the caster cannot levitate more than 20 feet per level from the ground level where the spell was cast. (Such range is applied both to movement into the air and to downward movement into a pit or chasm.)</p>'],
                [74, 'Light (Cleric)', 'Cleric', 1, '60 feet/level', '2 hours', '<p>The target person or object (at a range of up to 60 feet) produces light about as bright as a torch, to a radius of 20ft.</p>'],
                [75, 'Light (Magic-User)', 'Magic-User', 1, '60 feet/level', '1 hour (+10 minutes/level)', '<p>The target person or object (at a range of up to 60 feet) produces light about as bright as a torch, to a radius of 20ft.</p>'],
                [76, 'Lightning Bolt', 'Magic-User', 3, '240 feet (maximum distance)', 'Instantaneous', '<p>A bolt of lightning extends 60 feet from the targeted point, almost ten feet wide. Anyone in its path suffers 1d6 points of damage per level of the caster (half with a successful saving throw). The bolt always extends 60 feet, even if this means that it ricochets backward from something blocking its path.</p>'],
                [77, 'Limited Wish', 'Magic-User', 7, 'Referee’s Discretion', 'Changes reality', '<p>This powerful spell allows the caster to change reality, although in limited ways and sometimes only for limited periods of time. Such limitations will determined by the Referee in accordance with the circumstances.</p>'],
                [78, 'Locate Object (Cleric)', 'Cleric', 3, '90 feet', '1 round/level', '<p>Within the spell’s range, the Cleric perceives the correct direction (as the crow flies) toward an object the caster specifies by description in the spell. The object must be something the caster has seen, although the spell can detect an object in a general class of items known to the caster: stairs, gold, etc.</p>'],
                [79, 'Locate Object (Magic-User)', 'Magic-User', 2, '60 feet +10 feet/level', '1 round/level', '<p>Within the spell’s range, the caster perceives the correct direction (as the crow flies) toward an object the caster specifies by description in the spell. The object must be something the caster has seen, although the spell can detect an object in a general class of items known to the caster: stairs, gold, etc.</p>'],
                [80, 'Lower Water', 'Magic-User', 6, '240 feet', '2 hours', '<p>This spell lowers the depth and water level of lakes, rivers, wells, and other bodies of water to one-half normal.</p>'],
                [81, 'Magic Jar', 'Magic-User', 5, 'See below', 'See below', '<p>This spell relocates the caster’s life essence, intelligence, and soul into an object of virtually any kind. The ‘jar’ must be within 30 feet of the caster’s body for the transition to succeed. Once within the magic jar, the caster can possess the bodies of other creatures and people, provided that they are within 120 feet of the jar and fail a saving throw. The caster can return his or her soul to the magic jar at any time; if a body the caster controls is slain, the soul returns to the jar immediately. The Magic-User can return from the jar to his or her original body whenever desired, thus ending the spell. If the caster’s body is destroyed while his or her soul is in the magic jar, the soul no longer has a home other than within the magic jar, although the disembodied wizard can still possess other bodies as before. If the jar itself is destroyed while the Magic-User’s soul is within, the soul is lost.</p>'],
                [82, 'Magic Missile', 'Magic-User', 1, '150 feet', 'Immediate', '<p>A magical missile flies where the caster directs, with a range of 150 feet. At the Referee’s discretion, this spell may have one of two effects: 1) The Magic-User must roll to hit the target with a +1 bonus to the roll. The missile inflicts 1d6+1 points of damage. 2) The missile hits automatically, doing 1d4+1 points of damage.</p><p>In either case, the Magic-User casts an additional two missiles for every 5 levels of experience. Thus, at 5th level, the caster is able to hurl 3 magic missiles, and 5 missiles at 10th level.</p>'],
                [83, 'Magic Mouth', 'Magic-User', 2, 'Touch', 'Permanent until triggered or dispelled', '<p>This enchantment is set upon an object, and the magic is triggered when certain conditions established by the caster are met. When that happens, a mouth appears on the object and speaks the message it has been commanded to speak. The message may be up to thirty words long.</p>'],
                [84, 'Mass Charm', 'Magic-User', 8, '120 feet', 'Until dispelled', '<p>This spell operates in the same manner and with the same restrictions as Charm Person. However, it affects a total of 30 HD of creatures, in any combination. All saving throws are made with a penalty of -2.</p>'],
                [85, 'Mass Invisibility', 'Magic-User', 7, '240 feet', 'See below', '<p>This spell makes 1d3 x 100 man- or horse-sized creatures (or objects) invisible, as if they had been affected by a single Invisibility spell. The spell can instead affect up to 6 creatures of dragon size. As with the Invisibility spell, the enchantment lasts until dispelled or until one of the creatures makes an attack.</p>'],
                [86, 'Massmorph', 'Magic-User', 4, '240 feet', 'Until negated by the caster or dispelled', '<p>One hundred or fewer man- or horse-sized creatures are changed to appear like innocent trees. The illusion is so perfect that creatures moving through the “forest” will not detect the deception.</p>'],
                [87, 'Maze', 'Magic-User', 9, '60 feet', 'Depends on Intelligence', '<p>The targeted creature disappears into a gap in reality, where strange curving and branching passages conceal the way out. Creatures with an Intelligence score lower than 6 require 2d4 x3 rounds (minutes) to escape the interdimensional prison. Creatures with Intelligence scores 7–11 require 2d4 rounds, and creatures with an intelligence of 12+ require only 1d4 rounds to puzzle their way back into normal reality. Although monsters are not described with specific Intelligence scores, it should not be hard to determine into which category any specific monster falls. Unless ruled otherwise by the Referee, there is no saving throw to avoid the spell.</p>'],
                [88, 'Meteor Swarm', 'Magic-User', 9, '240 feet', 'Instantaneous', '<p>Tiny meteors swarm from the caster’s hands and explode into balls of fire where desired. The caster may hurl 4 normal fireballs for 10d6 damage or 8 fireballs of 10-foot diameter that inflict 5d6 points of damage. Targets are permitted a saving throw, allowing them to take half damage.</p>'],
                [89, 'Mind Blank', 'Magic-User', 8, '10-foot radius', '24 hours', '<p>The spell protects against all magic spying, including crystal balls, spells (including Wish), and even magical scrying by minor deities.</p>'],
                [90, 'Mirror Image', 'Magic-User', 2, 'Around caster', '1 hour or until destroyed', '<p>The spell creates 1d4 images of the caster, acting in perfect synchronization with him like mirror images. Attackers cannot distinguish the images from the caster, and may attack one of the images instead of the caster himself (determined randomly). When a hit is scored upon one of the images, it disappears.</p>'],
                [91, 'Monster Summoning I', 'Magic-User', 3, 'N/A', '6 rounds (minutes)', '<p>The caster summons allies, who serve him until slain, or until the duration of the spell expires. The allies do not appear immediately; there is a delay of 1 turn (10 minutes) before they appear.</p>' + this.monsterSummoningITable],
                [92, 'Monster Summoning II', 'Magic-User', 4, 'N/A', '6 rounds (minutes)', '<p>The caster summons allies, who serve him until slain, or until the duration of the spell expires. The allies do not appear immediately; there is a delay of 1 turn (10 minutes) before they appear.</p>' + this.monsterSummoningIITable],
                [93, 'Monster Summoning III', 'Magic-User', 5, 'N/A', '6 rounds (minutes)', '<p>The caster summons allies, who serve him until slain, or until the duration of the spell expires. The allies do not appear immediately; there is a delay of 1 turn (10 minutes) before they appear.</p>' + this.monsterSummoningIIITable],
                [94, 'Monster Summoning IV', 'Magic-User', 6, 'N/A', '6 rounds (minutes)', '<p>The caster summons allies, who serve him until slain, or until the duration of the spell expires. The allies do not appear immediately; there is a delay of 1 turn (10 minutes) before they appear.</p>' + this.monsterSummoningIVTable],
                [95, 'Monster Summoning V', 'Magic-User', 7, 'N/A', '6 rounds (minutes)', '<p>The caster summons allies, who serve him until slain, or until the duration of the spell expires. The allies do not appear immediately; there is a delay of 1 turn (10 minutes) before they appear.</p>' + this.monsterSummoningVTable],
                [96, 'Monster Summoning VI', 'Magic-User', 8, 'N/A', '6 rounds (minutes)', '<p>The caster summons allies, who serve him until slain, or until the duration of the spell expires. The allies do not appear immediately; there is a delay of 1 turn (10 minutes) before they appear.</p>' + this.monsterSummoningVITable],
                [97, 'Monster Summoning VII', 'Magic-User', 9, 'N/A', '6 rounds (minutes)', '<p>The caster summons allies, who serve him until slain, or until the duration of the spell expires. The allies do not appear immediately; there is a delay of 1 turn (10 minutes) before they appear.</p>' + this.monsterSummoningVIITable],
                [98, 'Move Earth', 'Magic-User', 6, '240 feet', '1 hour; effects permanent', '<p>This spell can only be used above ground. It allows the caster to move hills and other raised land or stone at a rate of 6 feet per minute (60 feet per turn).</p>'],
                [99, 'Neutralize Poison', 'Cleric', 4, 'Touch', 'Immediate', '<p>This spell counteracts poison if used promptly, but cannot be used to bring the dead back to life later.</p>'],
                [100, 'Part Water (Cleric)', 'Cleric', 7, '240 feet', '2 hours', '<p>This spell creates a gap through water, to a depth of 20 feet. At 18th level and every level thereafter, the Cleric adds 10 feet to the depth of water parted, and 1 additional hour to the spell’s duration.</p>'],
                [101, 'Part Water (Magic-User)', 'Magic-User', 6, '120 feet', '1 hour', '<p>This spell creates a gap through water, but only to a depth of 10 feet.</p>'],
                [102, 'Passwall', 'Magic-User', 5, '30 feet', '3 turns (30 minutes)', '<p>This spell creates a hole through solid rock, about 7 feet high, 10 feet wide, and 10 feet deep (possibly deeper at the discretion of the Referee). The hole closes again at the end of the spell’s duration.</p>'],
                [103, 'Permanency', 'Magic-User', 8, 'See below', 'Permanent until dispelled by an opponent of twice the caster’s level', '<p>This spell makes the effect of another spell permanent — unless a Magic-User of twice the caster’s level dispels it. No more than one Permanency is ordinarily possible on any one object, and no more than two upon a creature. Considerable Referee discretion is required for the use of this spell; many spells should not be subject to being made permanent.</p>'],
                [104, 'Phantasmal Force', 'Magic-User', 2, '240 feet', 'Until concentration ends', '<p>This spell creates an illusion that seems realistic to all who view it. The illusion disappears when it is touched, but if the viewer believes the illusion is real, it can cause damage. Unless the Referee rules otherwise, victims of the spell are permitted a saving throw, and the illusion cannot cause more than 2d6 points of damage per victim. This will depend on circumstances; a truly brilliant use of the spell can be quite devastating, and a poorly thought-out illusion might cause almost immediate disbelief.</p>'],
                [105, 'Phase Door', 'Magic-User', 7, '10 feet from caster', 'Seven uses', '<p>The phase door is an invisible portal about 7 feet high, 10 feet wide, and 10 feet deep, accessible only to the caster. A barrage of Dispel Magic spells can close the passage, but only if the combined level of the dispelling casters is twice that of the portal’s creator.</p>'],
                [106, 'Plant Growth', 'Magic-User', 4, '240 feet', 'Permanent until dispelled', '<p>Undergrowth in the area suddenly grows into an impassable forest of thorns and vines. Up to 300 square feet of ground can be affected by this spell and the caster can decide the shape of the area to be enchanted. An alternate version (Referee’s decision) would allow the spell to affect an area of 300 feet x 300 feet, for a total of 90,000 square feet).</p>'],
                [107, 'Polymorph Object', 'Magic-User', 8, '240 feet', 'Referee’s discretion', '<p>An object can be turned into another object, animal, vegetable, or mineral. The degree of change will affect the spell’s duration. Animal-to-animal changes, vegetable-tovegetable changes, and mineral-to-mineral changes are all likely to remain permanent until dispelled. Thus, turning a human into an orc, or turning a wall into a pile of sand, would both result in a permanent change. On the other hand, turning a shrub into a thinking human being would last only a small number of turns. Determining how long a proposed use of the spell will last is the province of the Referee; it is important to remember that this is an eighthlevel spell of considerable power—but not as powerful as a ninth-level Wish spell.</p>'],
                [108, 'Polymorph Other', 'Magic-User', 4, '240 feet', 'Permanent until dispelled', '<p>This spell allows the caster to turn another being into a different type of creature, such as a dragon, a garden slug, or of course, a frog or newt. The polymorphed creature gains all the abilities of the new form, but retains its own mind and hit points.</p>'],
                [109, 'Polymorph Self', 'Magic-User', 4, 'Caster', '1 hour or Referee’s discretion', '<p>The caster assumes the form of any object or creature, gaining the new form’s attributes (the use of wings, for example), but not its hit points or combat abilities. The Referee might allow the benefit of the new form’s armor class, if it is due to heavily armored skin. A great deal of the spell’s effect is left to the Referee to decide.</p>'],
                [110, 'Power Word, Blind', 'Magic-User', 8, '120 feet', '1d4 or 2d4 days (See below)', '<p>The caster speaks a word of power to a particular creature. If that creature has 40 hit points or fewer, it is instantly blinded for 2d4 days; if the creature has from 41 to 80 hit points, it is blinded for 1d4 days. If the creature has more than 80 hit points it is not affected by the spell. No saving throw applies.</p>'],
                [111, 'Power Word, Kill', 'Magic-User', 9, '120 feet', 'Immediate', '<p>The caster speaks a word of power to a particular creature. If that creature has 50 hit points or fewer, it is slain by the word it hears; if it has more than 50 hit points it is not affected by the spell. No saving throw is permitted.</p>'],
                [112, 'Power Word, Stun', 'Magic-User', 7, '120 feet', '1d6 or 2d6 turns (See below)', '<p>The caster speaks a word of power to a particular creature. If that creature has 35 or fewer hit points, it is instantly stunned for 2d6 turns; if the creature has from 36 to 70 hit points, it is stunned for only 1d6 turns. If the creature has more than 70 hit points it is not affected by the spell. No saving throw is permitted.</p>'],
                [113, 'Prayer', 'Cleric', 3, '30 feet', 'Following melee round', '<p>The Prayer spell seeks short-term favor from the gods to help some other spell or attack to succeed. Prayer affects a 20-foot x 20-foot area, causing a saving throw penalty to all creatures in that area. The penalty is a -1, plus an additional -1 for every ten caster levels. Thus, a 10th level Cleric causes a saving throw penalty of -2. The penalty actually takes effect in the melee round following the one in which it was cast.</p>'],
                [114, 'Prismatic Sphere', 'Magic-User', 9, '10-foot sphere', '1 hour', '<p>A sphere of seven colors whirls about the Magic-User, with a radius of 10 feet. The glowing colors form a layered spectrum; to destroy the sphere, each layer must be destroyed in turn from Red to Orange, to Yellow, to Blue, to Indigo, and then to the innermost Violet layer. Any creature of 7 or fewer hit dice that looks upon the sphere will be blinded for 1d6 turns.</p>' + this.prismaticSphereTable],
                [115, 'Project Image', 'Magic-User', 6, '240-foot sphere', '1 hour', '<p>The caster projects an image of himself or herself, to a maximum range of 240 feet. Not only does the projected image mimic the caster’s sounds and gestures, but also any spells being cast will appear to originate from the image.</p>'],
                [116, 'Protection from Evil (Cleric)', 'Cleric', 1, 'Caster', '2 hours', '<p>Creates a magical field of protection immediately around the caster, blocking out all enchanted monsters such as elementals and demons). Evil monsters suffer a -1 penalty to hit the caster, and the caster gains +1 on all saving throws against such attacks. If the caster already has any magical bonuses to saving throws or armor class, the bonus from the magic circle has no effect, although the protective circle still functions against enchanted creatures.</p><p>The Magic-User version of this spell is exactly the same as the one used by the Cleric, except that it has a duration time of 1 hour.</p>'],
                [117, 'Protection from Evil (Magic-User)', 'Magic-User', 1, 'Caster', '1 hour', '<p>Creates a magical field of protection immediately around the caster, blocking out all enchanted monsters such as elementals and demons). Evil monsters suffer a -1 penalty to hit the caster, and the caster gains +1 on all saving throws against such attacks. If the caster already has any magical bonuses to saving throws or armor class, the bonus from the magic circle has no effect, although the protective circle still functions against enchanted creatures.</p><p>The Magic-User version of this spell is exactly the same as the one used by the Cleric, except that it has a duration time of 1 hour.</p>'],
                [118, 'Protection from Evil, 10-Foot Radius (Cleric)', 'Cleric', 4, 'Centered on caster', '1 hour', '<p>The spell creates a magical field of protection, ten feet in radius, around the caster. The field blocks out all enchanted monsters (such as elementals and demons). Evil monsters suffer a -1 penalty to hit anyone within the protective globe, and these shielded individuals gain +1 on all saving throws against such attacks. If a person in the circle already has any magical bonuses to saving throws or armor class, the bonus from the magic circle has no effect for that person, although the protective circle still functions against enchanted creatures.</p>'],
                [119, 'Protection from Evil, 10-Foot Radius (Magic-User)', 'Magic-User', 3, 'Centered on caster', '1 hour', '<p>The spell creates a magical field of protection, ten feet in radius, around the caster. The field blocks out all enchanted monsters (such as elementals and demons). Evil monsters suffer a -1 penalty to hit anyone within the protective globe, and these shielded individuals gain +1 on all saving throws against such attacks. If a person in the circle already has any magical bonuses to saving throws or armor class, the bonus from the magic circle has no effect for that person, although the protective circle still functions against enchanted creatures.</p>'],
                [120, 'Protection from Normal Missiles', 'Magic-User', 3, 'Caster', '2 hours', '<p>The caster becomes invulnerable to non-magical missiles, although larger missiles such as boulders will overcome the spell’s magic.</p>'],
                [121, 'Purify Food and Drink', 'Cleric', 1, 'Close/Touch (Referee’s discretion)', 'Immediate', '<p>Enough food and water for up to a dozen people is made pure, removing spoilage and poisons.</p>'],
                [122, 'Pyrotechnics', 'Magic-User', 2, '240 feet', '1 hour', '<p>The caster creates either fireworks or blinding smoke from a normal fire source such as a torch or campfire. The Referee will decide exactly how much smoke (or fireworks) is produced, what effect it has, and what happens to it as it is produced, but the amount of smoke will definitely be more than 8000 cubic feet (roughly 20 x 20 x 20 feet).</p>'],
                [123, 'Quest', 'Cleric', 5, 'Speaking range', 'Until completed', '<p>If the spell succeeds (saving throw applies), the caster may set a task for the spell’s victim. If the victim does not diligently work at performing the task, a deadly weakness will set in (50% reduction in Strength), and an attempt to entirely abandon the quest incurs a curse set by the caster in the wording of the original Quest. The details, of course, must be approved by the Referee.</p>'],
                [124, 'Raise Dead', 'Cleric', 5, 'Close/Touch (Referee’s discretion)', 'Immediate', '<p>Raise Dead allows the Cleric to raise a corpse from the dead, provided it has not been dead too long. The normal time limit is 5 days, but for every caster level higher than 8th, the time limit extends another 5 days. Characters with low Constitution might not survive the ordeal, and even for those with strong Constitution a period of at least a week is required before they can function normally. This spell functions only on “human-like” races, that is, ones that can be used for player characters.</p>'],
                [125, 'Read Languages', 'Magic-User', 1, 'Normal reading distance', 'One or two readings', '<p>This spell allows the caster to decipher directions, instructions, and formulae in languages unknown to the caster. This can be particularly useful for treasure maps, but it does not solve any codes.</p>'],
                [126, 'Read Magic', 'Magic-User', 1, 'Caster only', '2 scrolls or other magical writings', '<p>This spell allows the caster to read the magical writings upon scrolls and (occasionally) dungeon walls. Without the use of this spell, magical writing cannot be read even by a Magic-User.</p>'],
                [127, 'Reincarnation', 'Magic-User', 6, 'Touch', 'Instantaneous', '<p>This spell brings a dead person’s soul back from the dead, but the soul reappears in a newly formed body. Reincarnation will not affect someone who has been dead more than a week. Roll 1d20 on the following table. If the resulting creature is a normal character race, roll 1d6 to determine the character’s new level.</p>' + this.reincarnationTable],
                [128, 'Remove Curse (Cleric)', 'Cleric', 3, 'Very close', 'Immediate', '<p>This spell removes one curse from a person or object.</p>'],
                [129, 'Remove Curse (Magic-User)', 'Magic-User', 4, 'Very close', 'Immediate', '<p>This spell removes one curse from a person or object.</p>'],
                [130, 'Repulsion', 'Magic-User', 6, '120 feet', '1 hour', '<p>Any creature trying to move toward the caster finds itself moving away, instead.</p>'],
                [131, 'Restoration', 'Cleric', 7, 'Referee’s discretion', 'Immediate', '<p>This spell restores levels lost to such horrible creatures as wraiths and shadows. An evil reversal of the spell allows a Chaotically aligned Cleric to drain a level from the target. The “good” version of the spell is exhausting to the caster, incapacitating him for 2d10 days. At the discretion of the Referee, this spell may restore lost points of ability scores as well as lost levels.</p>'],
                [132, 'Resurrection', 'Cleric', 7, 'Referee’s discretion', 'Immediate', '<p>This spell (also known as “Raise Dead Fully”) raises the dead back to life, in the same manner as the Raise Dead spell. It is, however, considerably more powerful: the person raised from the dead needs no time to recuperate from the experience of death, and suffers no other penalties. An evil “reversal” of the spell can also be cast, which causes death with no saving throw.</p>'],
                [133, 'Reverse Gravity', 'Magic-User', 7, '90 feet', '1 round (minute)', '<p>The spell reverses gravity in a cubical area approximately 30 feet x 30 feet x 30 feet in size. Everything in the area falls upward, and then when the spell ends it all falls back down again.</p>'],
                [134, 'Rope Trick', 'Magic-User', 3, 'As far as the caster can throw a rope', '1 hour +1 turn/level', '<p>The caster tosses a rope into the air and it hangs there, waiting to be climbed. The caster and up to three others can climb the rope and disappear into a small ‘other’ dimension. The rope itself can be pulled into the pocket dimension, or left outside. If it is left outside, however, someone may steal it.</p>'],
                [135, 'Shape Change', 'Magic-User', 9, 'Caster', '1d6+10 turns +1 turn/level', '<p>When the caster casts this spell upon him- or herself, it allows the caster to turn at will into a variety of creatures. In each form, the wizard gains the characteristics of the creature, much as with the Polymorph Others spell. Thus, turning into a dragon actually allows the caster to use the dragon’s breath weapon. The caster might then choose to turn into a raven, then a frog, or whatever other creature is chosen. It is not, of course, required that the caster use more than one shape—remaining as a dragon for the duration of the spell works perfectly well.</p>'],
                [136, 'Shield', 'Magic-User', 1, 'Caster', '2 turns', '<p>The caster conjures up an invisible shield that interposes itself in front of attacks. The shield improves the caster’s armor class to 2 [17] against missile attacks and to 4 [15] against other (melee) attacks. If the caster’s armor class is already better than the spell would grant, the spell has no effect.</p>'],
                [137, 'Silence, 15-Foot Radius', 'Cleric', 2, '180 feet', '12 turns', '<p>Magical silence falls in an area with a 15-foot radius around the targeted creature or object, and moves with it. Nothing from this area, no matter how loud, can be heard outside the radius.</p>'],
                [138, 'Simulacrum', 'Magic-User', 7, 'Touch', 'Permanent', '<p>The caster creates a duplicate of himself or some other person. The basic form is created from snow and ice, and must then be animated. (Animate Dead is an acceptable means.) A Limited Wish (along with the actual Simulacrum spell) is then used to imbue the animated form with intelligence and certain knowledge of the person being simulated. The simulacrum gains 30–60% (use a d4) of the simulated creature’s knowledge and experience. The simulacrum follows its creator’s orders. Note that the simulacrum is not a perfect representation of the original. Side by side, the differences are obvious, and the simulacrum is a magical creature detectable with a Detect Magic spell. If the original of the simulacrum dies, a strange effect begins: the simulacrum begins to gain the knowledge and experience of the dead individual at a rate of 1% per week, to a maximum of 90%.</p>'],
                [139, 'Sleep', 'Magic-User', 1, '240 feet', '1 hour', '<p>This spell puts enemies into an enchanted slumber (no saving throw permitted). It affects creatures based on their hit dice.</p>' + this.sleepTable],
                [140, 'Slow', 'Magic-User', 3, '240 feet', '3 turns (30 minutes)', '<p>In an area with a radius of 60 feet around the point where the spell is targeted, as many as 24 creatures failing a saving throw can move and attack only at half speed.</p>'],
                [141, 'Snake Charm', 'Cleric', 2, '60 feet', '1d4+2 turns', '<p>One hit die (1 HD) of snakes can be charmed per level of the caster. The snakes obey the caster’s commands.</p>'],
                [142, 'Speak with Animals', 'Cleric', 2, 'Caster', '6 turns', '<p>The caster can speak with normal animals. There is a good chance that the animals will provide reasonable assistance if requested, and they will not attack – unless the caster uses the spell to say something particularly offensive.</p>'],
                [143, 'Speak with the Dead', 'Cleric', 3, 'Close/Touch (Referee’s discretion)', '3 questions', '<p>The caster can ask three questions of a corpse, and it will answer, although the answers might be cryptic. Only higher level Clerics have enough spiritual power to command answers of long-dead corpses. Clerics lower than 8th level can gain answers only from bodies that have been dead 1d4 days. Clerics levels 8–14 can speak to corpses that have been dead 1d4 months. Clerics of level 15+ can gain answers from a corpse of any age, including thousand-year-old relics, as long as the body is still relatively intact. Note that a die roll is involved here: for example, a seventh-level Cleric attempting to speak with a two-day-old corpse might still fail—the d4 roll might indicate that only a one-day-old corpse can be reached with this particular attempt at the spell.</p>'],
                [144, 'Speak with Monsters', 'Cleric', 6, 'Speaking range', '3d4 questions', '<p>The caster can speak with any type of monster, for the duration of a certain number of questions. The monster is not forced to answer.</p>'],
                [145, 'Speak with Plants', 'Cleric', 4, 'Speaking range', '6 turns', '<p>The caster can speak and understand the speech of plants. Plants smaller than trees will obey commands, moving aside when requested, etc.</p>'],
                [146, 'Strength', 'Magic-User', 2, 'Touch', '8 hours (80 turns)', '<p>This spell may be cast upon a Fighter or a Cleric. For the duration of the spell, a Fighter gains 2d4 points of Strength, and a Cleric gains 1d6 points of Strength. Strength cannot exceed 18 unless the Referee chooses to allow additional bonuses resulting from the additional Strength.</p>'],
                [147, 'Sticks to Snakes', 'Cleric', 4, '120 feet', '1 hour', '<p>The caster may turn as many as 2d8 normal sticks into snakes, each one having a 50% chance of being venomous. The snakes follow commands, but turn back into sticks at the end of the spell, or when killed.</p>'],
                [148, 'Stone to Flesh', 'Magic-User', 6, '120 feet', 'Permanent until reversed', '<p>This spell can be used to counteract the negative effects of monsters who petrify their victims. It can also be reversed to turn flesh into stone, as desired by the caster. A saving throw is permitted to avoid being turned to stone, but if the spell succeeds the victim is transformed into a statue; the stone to flesh version of the spell will restore the victim to normal.</p>'],
                [149, 'Suggestion', 'Magic-User', 3, 'Shouting distance', '1 week', '<p>The caster speaks a hypnotic suggestion to the intended victim. Victims who fail a saving throw will carry out the suggestion, as long as it can be performed within a week. The suggestion might not call for the action to be carried out immediately, and can be contingent upon something else happening first. A suggestion that the victim commit suicide is only 1% likely to be obeyed.</p>'],
                [150, 'Symbol (Cleric)', 'Cleric', 7, 'Referee’s discretion (according to symbol)', 'Varies (depends upon symbol used)', '<p>A Symbol spell creates a deadly magical trap, written into the shape of a divine rune. The rune’s magic is activated when any person or creature hostile to the caster reads it, or passes over, under, or past it. Various different runes are known, and others may be possible:</p><p>Symbol of Discord: Causes all creatures in the hostile group to begin arguing, and possibly fighting amongst themselves with lethal intent.<br />Symbol of Fear: Casts a Fear spell.<br />Symbol of Sleep: Casts a Sleep spell affecting double the normal number of creatures and with double the normal duration.<br />Symbol of Stunning: Up to 150 hit dice (HD) of creatures are affected as per a Power Word, Stun.</p><p>Divine symbols cannot be crafted in such a way that would cause a permanent effect (such as insanity) upon those affected.</p>'],
                [151, 'Symbol (Magic-User)', 'Magic-User', 8, 'Referee’s discretion (according to symbol)', 'Varies (depends upon symbol used)', '<p>A Symbol spell creates a deadly magical trap, written into the shape of an arcane rune. The rune’s magic is activated when any person or creature hostile to the caster reads it, or passes over, under, or past it. Various different runes are known, and others may be possible:</p><p>Symbol of Death: Deals 80 hit points of damage.<br />Symbol of Discord: Causes all creatures in the hostile group to begin arguing, and possibly fighting amongst themselves with lethal intent.<br />Symbol of Fear: Casts a Fear spell.<br />Symbol of Insanity: Up to 100 HD of creatures are driven insane by a curse.<br />Symbol of Sleep: Casts a Sleep spell affecting double the normal number of creatures and with double the normal duration.<br />Symbol of Stunning: Up to 150 hit dice (HD) of creatures are affected as per a Power Word, Stun.</p>'],
                [152, 'Telekinesis', 'Magic-User', 5, '120 feet', '6 turns (1 hour)', '<p>The caster can move objects using mental power alone. The amount of weight that can be lifted and moved is 20 pounds per level. It is up to the Referee’s interpretation of the spell whether the objects can be thrown, and at what speed.</p>'],
                [153, 'Teleport', 'Magic-User', 5, 'Touch', 'Instantaneous', '<p>This spell transports the caster or another person to a destination that the caster knows, or at least knows what it looks like from a picture or a map. Success depends on how well the caster knows the targeted location, as follows:</p><ol><li>If the caster has only seen the location in a picture or through a map (so that knowledge is not based on direct experience), there is only a 25% chance of success, and failure means death, for the traveler’s soul is lost in the spaces between realities.</li><li>If the caster has seen but not studied the location, there is a 20% chance of error. In the case of an error, there is a 50% chance that the traveler arrives low, 1d10 x10 feet below the intended location (with death resulting from arrival within a solid substance). If the error is high (over the 50% chance for a “low” arrival), the traveler arrives 1d10 x10 feet above the targeted location—likely resulting in a deadly fall.</li><li>If the caster is well familiar with the location, or has studied it carefully, there is only a 5% chance of error. On a 1 in 6 the teleport is low, otherwise it is high. In either case, the arrival is 1d4 x10 feet high or low.</li></ol>'],
                [154, 'Time Stop', 'Magic-User', 9, 'Caster', '1d4+1 rounds', '<p>The caster stops the passage of time in a radius of about 15 feet around himself. (The time-stopped area does not thereafter move with the caster.) Any creatures within this area are suspended in time, unable to act. The caster is not stopped in time while in the area or beyond.</p>'],
                [155, 'Transmute Rock to Mud', 'Magic-User', 5, '120 feet', '3d6 days, unless reversed', '<p>This spell transmutes rock (and any other form of earth, including sand) into mud. An area of roughly 300 x 300 feet becomes a deep mire, reducing movement to 10% of normal.</p>'],
                [156, 'Wall of Fire', 'Magic-User', 4, '60 feet', 'Concentration', '<p>A wall of fire flares into being and burns for as long as the caster concentrates upon it. Creatures with 3 or fewer hit dice cannot pass through it, and no creature can see through it to the other side. Passing through the fire inflicts 1d6 hit points of damage (no saving throw) and undead creatures sustain twice the normal damage. The caster may choose to create a straight wall 60 feet long and 20 feet high, or a circular wall with a 15-foot radius, also 20 feet high.</p>'],
                [157, 'Wall of Ice', 'Magic-User', 4, '60 feet', 'Concentration', '<p>The caster conjures up a wall of ice, six feet thick and nontransparent. The caster may choose to create a straight wall 60 feet long and 20 feet high, or a circular wall with a 15-foot radius, also 20 feet high. Creatures with 3 or fewer hit dice cannot affect the wall, but creatures of 4+ hit dice are able to smash through it, taking 1d6 points of damage in the process. Creatures with fire-based metabolisms take 2d6 instead of the normal 1d6. Fire spells and magical effects are negated in the vicinity of the wall.</p>'],
                [158, 'Wall of Iron', 'Magic-User', 5, '60 feet', '2 hours', '<p>The caster conjures an iron wall from thin air. The wall is 3 feet thick, 50 feet tall, and 50 feet long.</p>'],
                [159, 'Wall of Stone', 'Magic-User', 5, '60 feet', 'Permanent until dispelled', '<p>The wall of stone conjured by this spell is two feet thick, with a surface area of 1,000 square feet. The caster might choose to make the wall 50 feet long (in which case it would be 20 feet tall), or 100 feet long (in which case it would be only 10 feet tall).</p>'],
                [160, 'Water Breathing', 'Magic-User', 3, '30 feet', '2 hours', '<p>The recipient of the spell is able to breathe underwater until the spell’s duration expires.</p>'],
                [161, 'Web', 'Magic-User', 2, '30 feet', '8 hours', '<p>Fibrous, sticky webs fill an area up to 10 x 10 x 20 feet. It is extremely difficult to get through the mass of strands—it takes one turn if a torch and sword (or a flaming sword) are used, and creatures larger than a horse can break through in 2 turns. Humans alone take more time to break through — perhaps 3–4 turns or longer at the Referee’s discretion.</p>'],
                [162, 'Wizard Eye', 'Magic-User', 4, '240 feet', '1 hour', '<p>The caster conjures up an invisible, magical “eye,” that can move a maximum of 240 feet from its creator. It floats along as directed by the caster, at a rate of 120 feet per turn (12 feet per minute).</p>'],
                [163, 'Wizard Lock', 'Magic-User', 2, 'Close', 'Permanent until dispelled', '<p>As with a Hold Portal spell, Wizard Lock holds a door closed, but it is permanent until dispelled. Creatures with magic resistance can shatter the spell without effort. Any Magic-User at least three levels higher than the caster can open the portal, and a Knock spell will open it as well, although the spell is not permanently destroyed in these cases.</p>'],
                [164, 'Wish', 'Magic-User', 9, 'Unlimited', 'See below', '<p>This spell is not all-powerful; it grants wishes of limited scope (although more powerful than a Limited Wish). The Referee’s discretion will rule what sort of wishes are within the spell’s power. (One possible—unofficial—guideline might be that a Wish can grant effects that would be similar in power to a spell of level 8 or lower, with permanent effects in many cases.) After casting a Wish spell, the Magic-User is mentally drained and unable to cast spells for a period of 1d4 days.</p>'],
                [165, 'Wind Walk', 'Cleric', 7, 'Touch', '1 day or until dispelled', '<p>The caster and one other person in contact with him become incorporeal and mist-like, able to travel through walls and other obstacles. The Cleric can bring this companion along and travel at 48 feet per minute indoors (or in subterranean settings) and much faster outdoors.</p>'],
                [166, 'Word of Recall', 'Cleric', 6, 'Indefinite', 'Immediate', '<p>The Cleric teleports without error back to a prepared sanctuary.</p>'],
            ];

            this.spellObjectArray = this.spellArray.map((spell) => {
                return {
                    id: spell[0],
                    title: spell[1],
                    spellClass: spell[2],
                    level: spell[3],
                    range: spell[4],
                    duration: spell[5],
                    description: spell[6],
                    selected: false
                };
            });

        }
    }

    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    let spellsArray = (new SWSpells()).spellObjectArray;
    let activeSpellClass = "Cleric";


    /*
    if (false) {
    // if (getUrlParameter("state")) {
        let stateParamJSON = JSON.parse(decodeURIComponent(getUrlParameter("state")));
        let spellsParamArray = stateParamJSON.spells;

        activeSpellsArray = spellsParamArray.map(function (spellID) {
            let theSpell = {};
            for (let spell of spellsArray) {
                if (spell.id === spellID) {
                    theSpell = spell;
                    break;
                }
            }
            return theSpell;
        });
    }
    */

    if (getUrlParameter("state")) {
        let stateParamJSON = JSON.parse(decodeURIComponent(getUrlParameter("state")));
        activeSpellClass = stateParamJSON.spellClass;

        console.dir(stateParamJSON);

        for (let selectedSpell of stateParamJSON.selectedSpells) {
            for (let spell of spellsArray) {
                if (selectedSpell === spell.id) {
                    spell.selected = true;
                }
            }
        }
    }

    Vue.component('spell-entry', {
        props: ['spell'],
        template: `
                <div :id="spellAnchor" class="spell-entry col-xs-12">
                    <h3 class="spell-entry-header">{{ spell.title }}</h3>
                    <div><span class="spell-entry-label">Class:</span> {{ spell.spellClass }}</div>
                    <div><span class="spell-entry-label">Level:</span>  {{ spell.level }}</div>
                    <div><span class="spell-entry-label">Range:</span>  {{ spell.range }}</div>
                    <div><span class="spell-entry-label">Duration:</span>  {{ spell.duration }}</div>
                    <br />
                    <div v-html="spell.description"></div>
                </div>`,
        computed: {
            spellAnchor: function () {
                return "spell" + this.spell.id;
            }
        }
    });

    Vue.component('spell-menu-item', {
        props: ['spell','spells','active-spell-list'],
        template: `
            <li v-bind:class="{ checkedSpellRow: spellChecked }">
                <div class="spell-checkbox-wrap"><input type="checkbox" :checked="spellChecked" v-on:change="checkboxChange"></input></div>
                <div class="spell-name-wrap"><a href="javascript:void(0)" v-on:click="spellClick">{{ spell.title }}</a></div>
            </li>`,
        methods: {
            checkboxChange() {
                this.$emit('checkbox-change',this.spell);
            },
            spellClick() {
                this.$emit('spell-click', this.spell);
            }
        },
        computed: {
            spellChecked: function () {
                if (this.spell.selected) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    })

    var app = new Vue({
        el: '#app',
        data: {
            activeSpellClass,
            spells: spellsArray,
            levels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            selectedSpell: {
                title: "",
                description: ""
            },
            customModal: {
                title: "",
                body: ""
            }
        },
        computed: {
            stateParam: function () {
                return encodeURIComponent(JSON.stringify(this.stateJSON));
            },

            stateJSON: function () {
                return {
                    spellClass: this.activeSpellClass,
                    selectedSpells: this.selectedSpells
                }
            },

            stateURL: function () {
                return window.location.protocol + "//" + window.location.host + window.location.pathname + "?state=" + this.stateParam;
            },

            selectedSpells: function () {
                let selectedSpellsArray = [];
                for (let spell of this.spells) {
                    if (spell.selected) {
                        selectedSpellsArray.push(spell.id);
                    }
                }
                return selectedSpellsArray;
            }
        },
        created: function () {
            this.updateURL();
        },
        methods: {
            updateURL: function () {
                let date = new Date();
                let pageTitle = `S&W Spells (${date.toDateString()} ${date.toLocaleTimeString()})`;


                history.replaceState(this.stateJSON, pageTitle, this.stateURL);
                document.title = pageTitle;
            },

            checkboxChange: function (spell) {
                if (spell.selected === true) {
                    spell.selected = false;
                } else {
                    spell.selected = true;
                }
                this.updateURL();
            },

            spellClick: function (spell) {
                this.selectedSpell = spell;
                $("#spellModal").modal();
            },

            printSpellbook: function () {
                let printReady = false;

                for (let spell of this.spells) {
                    if (spell.selected && spell.spellClass === this.activeSpellClass) {
                        printReady = true;
                        break;
                    }
                }

                if (printReady) {
                    window.print();
                } else {
                    this.customModal.title = "No spells selected";
                    this.customModal.body = "Please select spells to print by checking the boxes next to the spell names.";
                    $("#customModal").modal();
                }
            },

            resetSpellbook: function () {
                for (let spell of this.spells) {
                    spell.selected = false;
                }
                this.activeSpellClass = "Cleric";
                this.updateURL();
                $("#resetModal").modal('hide');
            },

            showInstructions: function () {
                $("#instructionsModal").modal('show');
            },

            spellbookModal: function () {
                $("#resetModal").modal('show');
            },

            closeResetModal: function () {
                $("#resetModal").modal('hide');
            }
        }
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 27) { // escape key
            $(".modal").modal('hide');
        }
    });
});