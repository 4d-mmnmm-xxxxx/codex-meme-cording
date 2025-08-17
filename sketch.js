{\rtf1\ansi\ansicpg932\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red252\green99\blue95;\red17\green29\blue24;\red0\green0\blue0;
\red255\green255\blue255;\red104\green177\blue255;\red120\green129\blue140;\red198\green146\blue255;\red150\green204\blue255;
}
{\*\expandedcolortbl;;\cssrgb\c100000\c48235\c44706;\cssrgb\c7843\c14902\c12157;\cssrgb\c0\c0\c0;
\cssrgb\c100000\c100000\c100000;\cssrgb\c47451\c75294\c100000;\cssrgb\c54510\c58039\c61961;\cssrgb\c82353\c65882\c100000;\cssrgb\c64706\c83922\c100000;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrt\brdrnil \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 let\cf5 \strokec5  lineCountSlider, blurStrengthSlider, blurTimeSlider, rotSpeedSlider, micBtn;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  lineCount = \cf6 \strokec6 1\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  blurStrength = \cf6 \strokec6 2\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  blurDuration = \cf6 \strokec6 0.5\cf5 \strokec5 ; \cf7 \strokec7 // seconds\cf5 \strokec5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  rotationSpeed = \cf6 \strokec6 0.01\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  angle = \cf6 \strokec6 0\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  rotationDir = \cf6 \strokec6 0\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  offsetY = \cf6 \strokec6 0\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  animStart = \cf6 \strokec6 0\cf5 \strokec5 , animFrom = \cf6 \strokec6 0\cf5 \strokec5 , animTo = \cf6 \strokec6 0\cf5 \strokec5 , animating = \cf6 \strokec6 false\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  blurActive = \cf6 \strokec6 false\cf5 \strokec5 , blurStart = \cf6 \strokec6 0\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  mic, fft;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  micToggle = \cf6 \strokec6 false\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 let\cf5 \strokec5  lPressed = \cf6 \strokec6 false\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 setup\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 createCanvas\cf5 \strokec5 (windowWidth, windowHeight);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 stroke\cf5 \strokec5 (\cf6 \strokec6 255\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 noFill\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   lineCountSlider = \cf8 \strokec8 select\cf5 \strokec5 (\cf9 \strokec9 '#lineCount'\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   blurStrengthSlider = \cf8 \strokec8 select\cf5 \strokec5 (\cf9 \strokec9 '#blurStrength'\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   blurTimeSlider = \cf8 \strokec8 select\cf5 \strokec5 (\cf9 \strokec9 '#blurTime'\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   rotSpeedSlider = \cf8 \strokec8 select\cf5 \strokec5 (\cf9 \strokec9 '#rotSpeed'\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   micBtn = \cf8 \strokec8 select\cf5 \strokec5 (\cf9 \strokec9 '#micBtn'\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   micBtn.\cf8 \strokec8 mousePressed\cf5 \strokec5 (() => \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     micToggle = !micToggle;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     micBtn.\cf8 \strokec8 html\cf5 \strokec5 (micToggle ? \cf9 \strokec9 'Mic On'\cf5 \strokec5  : \cf9 \strokec9 'Mic Off'\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 if\cf5 \strokec5  (micToggle) \cf8 \strokec8 startMic\cf5 \strokec5 (); \cf2 \strokec2 else\cf5 \strokec5  \cf2 \strokec2 if\cf5 \strokec5  (!lPressed) \cf8 \strokec8 stopMic\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \});\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 draw\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 background\cf5 \strokec5 (\cf6 \strokec6 0\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   lineCount = \cf8 \strokec8 int\cf5 \strokec5 (lineCountSlider.\cf8 \strokec8 value\cf5 \strokec5 ());\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   blurStrength = \cf8 \strokec8 float\cf5 \strokec5 (blurStrengthSlider.\cf8 \strokec8 value\cf5 \strokec5 ());\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   blurDuration = \cf8 \strokec8 float\cf5 \strokec5 (blurTimeSlider.\cf8 \strokec8 value\cf5 \strokec5 ());\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   rotationSpeed = \cf8 \strokec8 float\cf5 \strokec5 (rotSpeedSlider.\cf8 \strokec8 value\cf5 \strokec5 ());\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (animating) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 const\cf5 \strokec5  t = (\cf8 \strokec8 millis\cf5 \strokec5 () - animStart) / \cf6 \strokec6 500\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 if\cf5 \strokec5  (t >= \cf6 \strokec6 1\cf5 \strokec5 ) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5       offsetY = animTo;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5       animating = \cf6 \strokec6 false\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \} \cf2 \strokec2 else\cf5 \strokec5  \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5       offsetY = \cf8 \strokec8 lerp\cf5 \strokec5 (animFrom, animTo, t);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 push\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 translate\cf5 \strokec5 (width / \cf6 \strokec6 2\cf5 \strokec5 , height / \cf6 \strokec6 2\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   angle += rotationDir * rotationSpeed;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 rotate\cf5 \strokec5 (angle);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 const\cf5 \strokec5  spacing = \cf6 \strokec6 10\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 for\cf5 \strokec5  (\cf2 \strokec2 let\cf5 \strokec5  i = \cf6 \strokec6 0\cf5 \strokec5 ; i < lineCount; i++) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 const\cf5 \strokec5  baseY = offsetY + (i - (lineCount - \cf6 \strokec6 1\cf5 \strokec5 ) / \cf6 \strokec6 2\cf5 \strokec5 ) * spacing;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf8 \strokec8 drawNoiseLine\cf5 \strokec5 (baseY);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 pop\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (blurActive) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 const\cf5 \strokec5  t = (\cf8 \strokec8 millis\cf5 \strokec5 () - blurStart) / \cf6 \strokec6 1000\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 if\cf5 \strokec5  (t < blurDuration) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5       \cf2 \strokec2 const\cf5 \strokec5  amt = blurStrength * (\cf6 \strokec6 1\cf5 \strokec5  - t / blurDuration);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5       \cf8 \strokec8 filter\cf5 \strokec5 (\cf6 \strokec6 BLUR\cf5 \strokec5 , amt);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \} \cf2 \strokec2 else\cf5 \strokec5  \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5       blurActive = \cf6 \strokec6 false\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 drawNoiseLine\cf5 \strokec5 (baseY) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 const\cf5 \strokec5  col = \cf8 \strokec8 getMicColor\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 stroke\cf5 \strokec5 (col);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 strokeWeight\cf5 \strokec5 (\cf6 \strokec6 0.4\cf5 \strokec5  + \cf8 \strokec8 noise\cf5 \strokec5 (frameCount * \cf6 \strokec6 0.01\cf5 \strokec5 ) * \cf6 \strokec6 0.1\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 beginShape\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 for\cf5 \strokec5  (\cf2 \strokec2 let\cf5 \strokec5  x = -width / \cf6 \strokec6 2\cf5 \strokec5 ; x <= width / \cf6 \strokec6 2\cf5 \strokec5 ; x += \cf6 \strokec6 10\cf5 \strokec5 ) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 const\cf5 \strokec5  n = \cf8 \strokec8 noise\cf5 \strokec5 (x * \cf6 \strokec6 0.01\cf5 \strokec5 , frameCount * \cf6 \strokec6 0.005\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 const\cf5 \strokec5  y = baseY + (n - \cf6 \strokec6 0.5\cf5 \strokec5 ) * \cf6 \strokec6 50\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf8 \strokec8 vertex\cf5 \strokec5 (x, y);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 endShape\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 getMicColor\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (mic && (micToggle || lPressed)) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 const\cf5 \strokec5  spectrum = fft.\cf8 \strokec8 analyze\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 let\cf5 \strokec5  maxAmp = \cf6 \strokec6 0\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 let\cf5 \strokec5  idx = \cf6 \strokec6 0\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 for\cf5 \strokec5  (\cf2 \strokec2 let\cf5 \strokec5  i = \cf6 \strokec6 0\cf5 \strokec5 ; i < spectrum.length; i++) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5       \cf2 \strokec2 if\cf5 \strokec5  (spectrum[i] > maxAmp) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5         maxAmp = spectrum[i];\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5         idx = i;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5       \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 const\cf5 \strokec5  nyquist = \cf8 \strokec8 sampleRate\cf5 \strokec5 () / \cf6 \strokec6 2\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 const\cf5 \strokec5  freq = idx * nyquist / spectrum.length;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 return\cf5 \strokec5  \cf8 \strokec8 freqToColor\cf5 \strokec5 (freq);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 return\cf5 \strokec5  \cf8 \strokec8 color\cf5 \strokec5 (\cf6 \strokec6 255\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 freqToColor\cf5 \strokec5 (freq) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 const\cf5 \strokec5  maxFreq = \cf6 \strokec6 4000\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 const\cf5 \strokec5  t = \cf8 \strokec8 constrain\cf5 \strokec5 (freq / maxFreq, \cf6 \strokec6 0\cf5 \strokec5 , \cf6 \strokec6 1\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (t < \cf6 \strokec6 0.33\cf5 \strokec5 ) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 return\cf5 \strokec5  \cf8 \strokec8 lerpColor\cf5 \strokec5 (\cf8 \strokec8 color\cf5 \strokec5 (\cf6 \strokec6 255\cf5 \strokec5 ), \cf8 \strokec8 color\cf5 \strokec5 (\cf6 \strokec6 0\cf5 \strokec5 , \cf6 \strokec6 0\cf5 \strokec5 , \cf6 \strokec6 255\cf5 \strokec5 ), t / \cf6 \strokec6 0.33\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \} \cf2 \strokec2 else\cf5 \strokec5  \cf2 \strokec2 if\cf5 \strokec5  (t < \cf6 \strokec6 0.66\cf5 \strokec5 ) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 return\cf5 \strokec5  \cf8 \strokec8 lerpColor\cf5 \strokec5 (\cf8 \strokec8 color\cf5 \strokec5 (\cf6 \strokec6 0\cf5 \strokec5 , \cf6 \strokec6 0\cf5 \strokec5 , \cf6 \strokec6 255\cf5 \strokec5 ), \cf8 \strokec8 color\cf5 \strokec5 (\cf6 \strokec6 255\cf5 \strokec5 , \cf6 \strokec6 0\cf5 \strokec5 , \cf6 \strokec6 255\cf5 \strokec5 ), (t - \cf6 \strokec6 0.33\cf5 \strokec5 ) / \cf6 \strokec6 0.33\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \} \cf2 \strokec2 else\cf5 \strokec5  \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     \cf2 \strokec2 return\cf5 \strokec5  \cf8 \strokec8 lerpColor\cf5 \strokec5 (\cf8 \strokec8 color\cf5 \strokec5 (\cf6 \strokec6 255\cf5 \strokec5 , \cf6 \strokec6 0\cf5 \strokec5 , \cf6 \strokec6 255\cf5 \strokec5 ), \cf8 \strokec8 color\cf5 \strokec5 (\cf6 \strokec6 255\cf5 \strokec5 , \cf6 \strokec6 0\cf5 \strokec5 , \cf6 \strokec6 0\cf5 \strokec5 ), (t - \cf6 \strokec6 0.66\cf5 \strokec5 ) / \cf6 \strokec6 0.34\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 moveLine\cf5 \strokec5 (dy) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   animFrom = offsetY;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   animTo = offsetY + dy;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   animStart = \cf8 \strokec8 millis\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   animating = \cf6 \strokec6 true\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 triggerBlur\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   blurActive = \cf6 \strokec6 true\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   blurStart = \cf8 \strokec8 millis\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 startMic\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (!mic) \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     mic = \cf2 \strokec2 new\cf5 \strokec5  p5.\cf8 \strokec8 AudioIn\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     fft = \cf2 \strokec2 new\cf5 \strokec5  p5.\cf8 \strokec8 FFT\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5     fft.\cf8 \strokec8 setInput\cf5 \strokec5 (mic);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   mic.\cf8 \strokec8 start\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 stopMic\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (mic) mic.\cf8 \strokec8 stop\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 keyPressed\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (key === \cf9 \strokec9 'A'\cf5 \strokec5  || key === \cf9 \strokec9 'a'\cf5 \strokec5 ) rotationDir = -\cf6 \strokec6 1\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (key === \cf9 \strokec9 'D'\cf5 \strokec5  || key === \cf9 \strokec9 'd'\cf5 \strokec5 ) rotationDir = \cf6 \strokec6 1\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (key === \cf9 \strokec9 'S'\cf5 \strokec5  || key === \cf9 \strokec9 's'\cf5 \strokec5 ) \cf8 \strokec8 triggerBlur\cf5 \strokec5 ();\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (key === \cf9 \strokec9 'W'\cf5 \strokec5  || key === \cf9 \strokec9 'w'\cf5 \strokec5 ) \cf8 \strokec8 moveLine\cf5 \strokec5 (-\cf6 \strokec6 20\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (key === \cf9 \strokec9 'X'\cf5 \strokec5  || key === \cf9 \strokec9 'x'\cf5 \strokec5 ) \cf8 \strokec8 moveLine\cf5 \strokec5 (\cf6 \strokec6 20\cf5 \strokec5 );\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (key === \cf9 \strokec9 'L'\cf5 \strokec5  || key === \cf9 \strokec9 'l'\cf5 \strokec5 ) \{ lPressed = \cf6 \strokec6 true\cf5 \strokec5 ; \cf8 \strokec8 startMic\cf5 \strokec5 (); \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 keyReleased\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (key === \cf9 \strokec9 'A'\cf5 \strokec5  || key === \cf9 \strokec9 'a'\cf5 \strokec5  || key === \cf9 \strokec9 'D'\cf5 \strokec5  || key === \cf9 \strokec9 'd'\cf5 \strokec5 ) rotationDir = \cf6 \strokec6 0\cf5 \strokec5 ;\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf2 \strokec2 if\cf5 \strokec5  (key === \cf9 \strokec9 'L'\cf5 \strokec5  || key === \cf9 \strokec9 'l'\cf5 \strokec5 ) \{ lPressed = \cf6 \strokec6 false\cf5 \strokec5 ; \cf2 \strokec2 if\cf5 \strokec5  (!micToggle) \cf8 \strokec8 stopMic\cf5 \strokec5 (); \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf2 \strokec2 function\cf5 \strokec5  \cf8 \strokec8 windowResized\cf5 \strokec5 () \{\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5   \cf8 \strokec8 resizeCanvas\cf5 \strokec5 (windowWidth, windowHeight);\cell \row

\itap1\trowd \taflags5 \trgaph108\trleft-108 \trcbpat4 \trbrdrl\brdrnil \trbrdrt\brdrnil \trbrdrr\brdrnil 
\clvertalt \clcbpat3 \clwWidth16380\clftsWidth3 \clbrdrt\brdrnil \clbrdrl\brdrnil \clbrdrb\brdrnil \clbrdrr\brdrnil \clpadl0 \clpadr200 \gaph\cellx8640
\pard\intbl\itap1\pardeftab720\partightenfactor0
\cf5 \}\cell \lastrow\row
}