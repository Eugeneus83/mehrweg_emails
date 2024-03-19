import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { _16pxAlert } from './_16pxAlert/_16pxAlert';
import { _16pxAlertIcon } from './_16pxAlertIcon.js';
import { Badge_StyleDefault } from './Badge_StyleDefault/Badge_StyleDefault';
import { BadgeAppStore } from './BadgeAppStore/BadgeAppStore';
import { BadgeGooglePlay } from './BadgeGooglePlay/BadgeGooglePlay';
import { BadgeIcon } from './BadgeIcon.js';
import classes from './DBestatigung.module.css';
import { IllustrationApp } from './IllustrationApp/IllustrationApp';
import { LogoType } from './LogoType/LogoType';
import { MehrwegBox } from './MehrwegBox/MehrwegBox';

interface Props {
  className?: string;
}
/* @figmaId 11:127 */
export const DBestatigung: FC<Props> = memo(function DBestatigung(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <LogoType />
      <div className={classes.main}>
        <div className={classes.header}>
          <MehrwegBox classes={{ box_allein1: classes.box_allein1 }} />
          <div className={classes.text}>
            <div className={classes.dankeDassDuInMehrwegBestellst}>Danke, dass du in Mehrweg bestellst!</div>
            <div className={classes.wirFreuenUnsDassDuGemeinsamMit}>
              Wir freuen uns, dass du gemeinsam mit uns gegen die täglich halbe Tonne anfallenden Müll in Graz kämpfst!
            </div>
          </div>
        </div>
        <div className={classes.main2}>
          <div className={classes.section}>
            <div className={classes.intro}>
              <div className={classes.soFunktioniertDieRuckgabe}>So funktioniert die Rückgabe</div>
              <div className={classes.duHast21TageLangZeitUnsDeineVe}>
                Du hast 21 Tage lang Zeit, uns deine Verpackung zurückzugeben:
              </div>
            </div>
            <div className={classes.imageText}>
              <div className={classes.image}></div>
              <div className={classes.text2}>
                <div className={classes.text3}>
                  <div className={classes.beiEinemRestaurant}>Bei einem Restaurant</div>
                  <div className={classes.gibDieVerpackungenBeiEinemUnse}>
                    <p className={classes.labelWrapper}>
                      <span className={classes.label}>Gib die Verpackungen bei einem unserer </span>
                      <span className={classes.label2}>teilnehmenden Restaurants</span>
                      <span className={classes.label3}> zurück…</span>
                    </p>
                  </div>
                </div>
                <button className={classes.button}>
                  <div className={classes.ruckgabeStarten}>Rückgabe starten</div>
                </button>
              </div>
            </div>
            <div className={classes.imageText2}>
              <div className={classes.image2}></div>
              <div className={classes.text4}>
                <Badge_StyleDefault
                  text={{
                    badgeText: <div className={classes.badgeText}>Neu und gratis</div>,
                  }}
                />
                <div className={classes.text5}>
                  <div className={classes.OderEinfachAbholenLassen}>…oder einfach abholen lassen</div>
                  <div className={classes.wahleBeiDeinerNachstenBestellu}>
                    Wähle bei deiner nächsten Bestellung im Checkout einfach “ausständige Verpackung mitnehmen” aus.
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.dankUnsererKooperationMitDemUm}>
              <p className={classes.labelWrapper2}>
                <span className={classes.label4}>
                  Dank unserer Kooperation mit dem Umweltamt der Stadt Graz sind die{' '}
                </span>
                <span className={classes.label5}>ersten 5.000 Abholungen kostenlos</span>
                <span className={classes.label6}>. Velofood und die Umwelt sagen Danke!</span>
              </p>
              <div className={classes.textBlock}>
                <p></p>
              </div>
              <div className={classes.textBlock2}>
                <p className={classes.labelWrapper3}>
                  <span className={classes.label7}>Wichtig:</span>
                  <span className={classes.label8}>
                    {' '}
                    Bitte spüle deine Verpackung bevor du Sie dem Fahrer/in zurückgibst. Sonst kann er/sie die Mitnahme
                    ablehnen.
                  </span>
                </p>
              </div>
            </div>
            <div className={classes.infoText}>
              <div className={classes.fallsDuDieVerpackungNichtInner}>
                <p className={classes.labelWrapper4}>
                  <span className={classes.label9}>
                    {' '}
                    Falls du die Verpackung nicht innerhalb von 21 Tagen zurück gibst, werden dir{' '}
                  </span>
                  <span className={classes.label10}>€10 pro Verpackung verrechnet</span>
                  <span className={classes.label11}>.</span>
                </p>
              </div>
              <_16pxAlert
                swap={{
                  icon: <_16pxAlertIcon className={classes.icon} />,
                }}
              />
            </div>
            <div className={classes.action}>
              <button className={classes.button2}>
                <div className={classes.meineVerpackungen}>Meine Verpackungen</div>
              </button>
              <div className={classes.offeneVerpackungenInDeinemVelo}>
                Offene Verpackungen in deinem Velofood-Konto ansehen
              </div>
            </div>
          </div>
          <div className={classes.divider}></div>
          <div className={classes.section2}>
            <div className={classes.brauchstDuHilfe}>Brauchst du Hilfe?</div>
            <div className={classes.weitereInfosZuDenMehrwegverpac}>
              <p className={classes.labelWrapper5}>
                <span className={classes.label12}>Weitere Infos zu den Mehrwegverpackungen findest du </span>
                <span className={classes.label13}>in unseren FAQs</span>
                <span className={classes.label14}>.</span>
              </p>
              <div className={classes.textBlock3}>
                <p></p>
              </div>
              <div className={classes.textBlock4}>
                Deine Verpackung ist beschädigt oder du hast nicht die gleiche Verpackung, wie in der App angegeben
                erhalten? Melde dich bei uns:
              </div>
            </div>
            <div className={classes.contact}>
              <div className={classes.hilfeVelofoodAt}>hilfe@velofood.at</div>
              <div className={classes._436608399394}>+43 660 8399394</div>
            </div>
          </div>
          <div className={classes.divider2}></div>
          <div className={classes.app}>
            <div className={classes.text6}>
              <div className={classes.schnellerBestellenMitDerVelofo}>
                <div className={classes.textBlock5}>Schneller bestellen mit </div>
                <div className={classes.textBlock6}>der Velofood-App</div>
              </div>
              <div className={classes.badges}>
                <BadgeAppStore />
                <BadgeGooglePlay
                  swap={{
                    badge: <BadgeIcon className={classes.icon2} />,
                  }}
                />
              </div>
            </div>
            <IllustrationApp classes={{ illustrationApp: classes.illustrationApp }} />
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <div className={classes.hilfeVelofoodAt2}>hilfe@velofood.at</div>
        <div className={classes.impressum}>Impressum</div>
        <div className={classes.datenschutz}>Datenschutz</div>
      </div>
    </div>
  );
});
