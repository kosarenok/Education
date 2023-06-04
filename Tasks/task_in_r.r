library(ggplot2)
library(RColorBrewer)

data("diamonds")

p <- ggplot(diamonds, aes(x = carat, y = price, color = cut)) +
  geom_point(alpha = 0.5) +
  scale_color_brewer(palette = "Dark2") +
  labs(title = "Цены на бриллианты в зависимости от их веса и качества",
       x = "Вес (карат)", y = "Цена ($)") +
  theme_minimal()
ggsave("myplot.png", p, dpi = 300)


s <- ggplot(diamonds, aes(x = price)) +
  geom_histogram(binwidth = 500, fill = "#4c4ced", color = "black") +
  scale_fill_brewer(palette = "Set2") +
  labs(title = "Распределение цен на бриллианты",
       x = "Цена ($)", y = "Количество") +
  theme_bw()
ggsave("myplot_2.png", s, dpi = 300)