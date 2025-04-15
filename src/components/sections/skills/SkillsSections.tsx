"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { SKILL_CATEGORIES, SKILL_LEVELS } from "@/constants/section-skills";

const SkillsSection = () => {
  const t = useTranslations("Skills");
  // const [activeTab, setActiveTab] = React.useState("all");

  // Fonction pour rendre sûre l'utilisation des classes CSS
  const safeCss = (cssClass: string | undefined) => cssClass || "";

  // Fonction pour rendre l'icône en toute sécurité
  const safeIcon = (icon: React.ReactNode) => icon || null;

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/50 border-t border-b border-border">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{t("title")}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">{t("description")}</p>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {SKILL_CATEGORIES.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className={`flex items-center gap-3 p-4 border-b ${safeCss(category.bgColor)}`}
                  >
                    <div className="bg-background p-2 rounded-full">
                      <span className={safeCss(category.color)}>{safeIcon(category.icon)}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="p-6 space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={safeCss(category.color)}>{safeIcon(skill.icon)}</span>
                            <span className="font-medium">{skill.name}</span>
                            {skill.learning && (
                              <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">
                                En apprentissage
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {SKILL_LEVELS[skill.level]?.label || skill.level} - {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              skill.learning ? "bg-amber-500" : safeCss(category.progressColor)
                            }`}
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                        {skill.name === "Rust" && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Je suis en phase d&apos;apprentissage de Rust, avec pour objectif
                            d&apos;approfondir mes compétences en programmation système et Web
                            Assembly.
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Contenu pour chaque catégorie individuelle */}
          {SKILL_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div
                    className={`flex items-center gap-3 p-4 border-b ${safeCss(category.bgColor)}`}
                  >
                    <div className="bg-background p-2 rounded-full">
                      <span className={safeCss(category.color)}>{safeIcon(category.icon)}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="p-6 space-y-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={safeCss(category.color)}>{safeIcon(skill.icon)}</span>
                            <span className="font-medium">{skill.name}</span>
                            {skill.learning && (
                              <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">
                                En apprentissage
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {SKILL_LEVELS[skill.level]?.label || skill.level} - {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full ${
                              skill.learning ? "bg-amber-500" : safeCss(category.progressColor)
                            }`}
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                        {skill.name === "Rust" && (
                          <p className="text-sm text-muted-foreground mt-1">
                            Je suis en phase d&apos;apprentissage de Rust, avec pour objectif
                            d&apos;approfondir mes compétences en programmation système et Web
                            Assembly.
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
