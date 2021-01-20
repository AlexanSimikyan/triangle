import pygame
pygame.init()
win = pygame.display.set_mode((500,500))
class tank:
	x = None
	y = None
	surface = None
	def draw():
		pygame.draw.rect(surface, (0, 100, 50),(x, y, 30, 30))

	def move():
		keys = pygame.key.get_pressed()
		# if keys[pygame.K_UP]:


t = tank
while True:
	for e in pygame.event.get():
		if e.type == pygame.QUIT:
			exit()
        t.draw()
	pygame.display.update()



