from PIL import Image, ImageDraw, ImageFont
WINE=(122,21,38); CREAM=(244,242,240); SAND=(230,227,224)
S=4  # supersample

MARK=Image.open('public/brand/mark-light.png').convert('RGBA')
LOGO=Image.open('public/brand/logo-light.png').convert('RGBA')
def rings(size, bg, fg, pad_ratio=0.0, ring_w_ratio=0.0):
    """Square canvas with the pulse mark from the brand logo centred. pad_ratio shrinks it for the maskable safe zone."""
    im=Image.new('RGB',(size,size),bg)
    m=MARK.copy(); tw=int(size*(0.74-pad_ratio)); m=m.resize((tw,int(tw*m.height/m.width)),Image.LANCZOS)
    im.paste(m,((size-tw)//2,(size-m.height)//2),m)
    return im

rings(192,WINE,CREAM).save('public/icons/icon-192.png')
rings(512,WINE,CREAM).save('public/icons/icon-512.png')
rings(512,WINE,CREAM,pad_ratio=0.16).save('public/icons/icon-maskable-512.png')   # content inside the central 80% safe zone
rings(180,WINE,CREAM).save('public/icons/apple-touch-icon.png')
fav=rings(256,WINE,CREAM)
fav.save('public/favicon.ico',sizes=[(16,16),(32,32),(48,48)])

# Open Graph image 1200x630
W,H=1200*2,630*2
og=Image.new('RGB',(W,H),CREAM)
d=ImageDraw.Draw(og)
# wine panel on the right with the mark
d.rectangle([int(W*0.60),0,W,H],fill=WINE)
lw=int(W*0.34); lg=LOGO.resize((lw,int(lw*LOGO.height/LOGO.width)),Image.LANCZOS)
og.paste(lg,(int(W*0.80)-lw//2,H//2-lg.height//2),lg)

def font(names,size):
    import glob
    for pat in names:
        for p in glob.glob(pat):
            try: return ImageFont.truetype(p,size)
            except Exception: pass
    return ImageFont.load_default()
serif=lambda s: font(['/usr/share/fonts/**/CharterBT-Roman.*','/usr/share/fonts/**/charter*Roman*','/usr/share/fonts/**/Caladea-Regular.*','/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'],s)
sans_b=lambda s: font(['/usr/share/fonts/**/Inter-Bold.*','/usr/share/fonts/**/Inter*Bold*','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'],s)
sans=lambda s: font(['/usr/share/fonts/**/Inter-Regular.*','/usr/share/fonts/**/Inter*Regular*','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'],s)
x=110
d.text((x,200),"MATCH & MEET",font=sans_b(44),fill=WINE)
d.text((x,320),"Connecting people",font=serif(118),fill=(43,40,41))
d.text((x,460),"meaningfully again.",font=serif(118),fill=WINE)
d.text((x,660),"Compatibility-led matchmaking events in Bangkok",font=sans(40),fill=(72,68,70))
d.text((x,750),"matchandmeet.life",font=sans_b(40),fill=WINE)
og=og.resize((1200,630),Image.LANCZOS)
og.save('public/og.png',optimize=True)
print('ok')
