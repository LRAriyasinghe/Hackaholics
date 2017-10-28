<?php

/* themes/drupal8_custom_theme/templates/layout/page.html.twig */
class __TwigTemplate_3bb43c3be44c4efcb47f90562a8b5bdb9b7061ecafd453306e05643f70386b4b extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 74, "for" => 118);
        $filters = array("raw" => 119, "date" => 323);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'for'),
                array('raw', 'date'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 60
        echo "

<!-- Header and Navbar -->
<header class=\"main-header\">
  <nav class=\"navbar topnav navbar-default\" role=\"navigation\">
    <div class=\"\">
      <div class=\"\">
      <div class=\"navbar-header\">
        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#main-navigation\">
          <span class=\"sr-only\">Toggle navigation</span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
          <span class=\"icon-bar\"></span>
        </button>
        ";
        // line 74
        if ($this->getAttribute(($context["page"] ?? null), "header", array())) {
            // line 75
            echo "          ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "header", array()), "html", null, true));
            echo "
        ";
        }
        // line 77
        echo "      </div>

      <!-- Navigation -->
      <div class=\"\">
        ";
        // line 81
        if ($this->getAttribute(($context["page"] ?? null), "primary_menu", array())) {
            // line 82
            echo "          ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "primary_menu", array()), "html", null, true));
            echo "
        ";
        }
        // line 84
        echo "      </div>
      <!--End Navigation -->

      <!-- Navigation -->
      <div class=\"\">
        <!--Search-->
          ";
        // line 90
        if ($this->getAttribute(($context["page"] ?? null), "search", array())) {
            // line 91
            echo "            ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "search", array()), "html", null, true));
            echo "
          ";
        }
        // line 93
        echo "        <!--End Search-->
      </div>
      <!--End Navigation -->

      </div>
    </div>
  </nav>

  <!-- Banner -->
  ";
        // line 102
        if ((($context["is_front"] ?? null) && $this->getAttribute(($context["page"] ?? null), "slideshow", array()))) {
            echo "  
    <div class=\"slideshow\">
      ";
            // line 104
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "slideshow", array()), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 107
        echo "  <!-- End Banner -->

</header>
<!--End Header & Navbar -->

<div class=\"main-content-wrap\">

  <!-- Start Slider -->
  ";
        // line 115
        if (($context["is_front"] ?? null)) {
            // line 116
            echo "    <div class=\"flexslider\">
      <ul class=\"slides\">
        ";
            // line 118
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["slider_content"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["slider_contents"]) {
                // line 119
                echo "          ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($context["slider_contents"]));
                echo "
        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['slider_contents'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 121
            echo "      </ul>
    </div>
  ";
        }
        // line 124
        echo "  <!-- End Slider -->

  <!--Home page message-->
  ";
        // line 127
        if ((($context["is_front"] ?? null) && $this->getAttribute(($context["page"] ?? null), "homepagemessage", array()))) {
            // line 128
            echo "    <div class=\"container-sub\">
      <div class=\"row\">
        <div class=\"col-md-12\">
          ";
            // line 131
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "homepagemessage", array()), "html", null, true));
            echo "
        </div>
      </div>
    </div>
  ";
        }
        // line 136
        echo "  <!--End Highlighted-->

  <!-- Page Title -->
  ";
        // line 139
        if (($this->getAttribute(($context["page"] ?? null), "page_title", array()) &&  !($context["is_front"] ?? null))) {
            // line 140
            echo "    <div id=\"page-title\">
      <div id=\"page-title-inner\">
        <!-- start: Container-sub -->
        <div class=\"container-sub\">
          ";
            // line 144
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "page_title", array()), "html", null, true));
            echo "
        </div>
      </div>
    </div>
  ";
        }
        // line 149
        echo "  <!-- End Page Title -- >


  <!-- layout -->
  ";
        // line 153
        if ( !($context["is_front"] ?? null)) {
            // line 154
            echo "    <div id=\"wrapper\" class=\"main-container\">

      <!--Highlighted-->
      ";
            // line 157
            if ($this->getAttribute(($context["page"] ?? null), "highlighted", array())) {
                // line 158
                echo "        <div class=\"row\">
          <div class=\"col-md-12\">
            ";
                // line 160
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "highlighted", array()), "html", null, true));
                echo "
          </div>
        </div>
      ";
            }
            // line 164
            echo "      <!--End Highlighted-->

      <!-- start: Container-sub -->
      <div class=\"container-sub\">
                
        <!--start:content -->
        ";
            // line 170
            if ($this->getAttribute(($context["page"] ?? null), "breadcrumb", array())) {
                // line 171
                echo "          <div class=\"breadcrumb-wrap\">
            <div class=\"breadcrumb-subwrap\">";
                // line 172
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "breadcrumb", array()), "html", null, true));
                echo "</div>
          </div>
        ";
            }
            // line 175
            echo "
        <div class=\"row layout\">

          <!--- Start Left SideBar -->
          ";
            // line 179
            if ($this->getAttribute(($context["page"] ?? null), "sidebar_first", array())) {
                // line 180
                echo "            <div class=\"sidebar\" >
              <div class = ";
                // line 181
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["sidebarfirst"] ?? null), "html", null, true));
                echo " >
                ";
                // line 182
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_first", array()), "html", null, true));
                echo "
              </div>
            </div>
          ";
            }
            // line 186
            echo "          <!---End Right SideBar -->

          <!--- Start content -->
          ";
            // line 189
            if (($this->getAttribute(($context["page"] ?? null), "content", array()) &&  !($context["is_front"] ?? null))) {
                // line 190
                echo "            <div class=\"content_layout\">
              <div class=";
                // line 191
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["contentlayout"] ?? null), "html", null, true));
                echo ">
                ";
                // line 192
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content", array()), "html", null, true));
                echo "
              </div>
            </div>
          ";
            }
            // line 196
            echo "          <!---End content -->

          <!--- Start Right SideBar -->
          ";
            // line 199
            if ($this->getAttribute(($context["page"] ?? null), "sidebar_second", array())) {
                // line 200
                echo "            <div class=\"sidebar\">
              <div class=";
                // line 201
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["sidebarsecond"] ?? null), "html", null, true));
                echo ">
                ";
                // line 202
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "sidebar_second", array()), "html", null, true));
                echo "
              </div>
            </div>
          ";
            }
            // line 206
            echo "          <!---End Right SideBar -->
          
        </div>
        <!--End Content -->

        <!--Start Content Bottom-->
        ";
            // line 212
            if ($this->getAttribute(($context["page"] ?? null), "content_bottom", array())) {
                // line 213
                echo "          <div class=\"row\">
            ";
                // line 214
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "content_bottom", array()), "html", null, true));
                echo "
          </div>
        ";
            }
            // line 217
            echo "        <!--End Content Bottom-->

      </div>
    </div>
  ";
        }
        // line 222
        echo "  <!-- End layout -->


  <!-- Start Google Map -->
  ";
        // line 226
        if ($this->getAttribute(($context["page"] ?? null), "google_map", array())) {
            // line 227
            echo "    <div class=\"google-map\">
      ";
            // line 228
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "google_map", array()), "html", null, true));
            echo "
    </div>
  ";
        }
        // line 231
        echo "  <!-- End Google Map -->


  <!-- Start bottom -->
  ";
        // line 235
        if (($context["is_front"] ?? null)) {
            echo "  
    ";
            // line 236
            if ((($this->getAttribute(($context["page"] ?? null), "bottom_first", array()) || $this->getAttribute(($context["page"] ?? null), "bottom_second", array())) || $this->getAttribute(($context["page"] ?? null), "bottom_third", array()))) {
                // line 237
                echo "      <div class=\"bottom-widgets\">
        <div class=\"container-sub\">        
          <div class=\"row-sub clearfix\">

            <!-- Start Bottom First Region -->          
            ";
                // line 242
                if ($this->getAttribute(($context["page"] ?? null), "bottom_first", array())) {
                    // line 243
                    echo "              <div class = ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                    echo ">
                ";
                    // line 244
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_first", array()), "html", null, true));
                    echo "
              </div>
            ";
                }
                // line 246
                echo "          
            <!-- End Bottom First Region -->

            <!-- Start Bottom Second Region -->
            ";
                // line 250
                if ($this->getAttribute(($context["page"] ?? null), "bottom_second", array())) {
                    // line 251
                    echo "              <div class = ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                    echo ">
                ";
                    // line 252
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_second", array()), "html", null, true));
                    echo "
              </div>
            ";
                }
                // line 254
                echo "          
            <!-- End Bottom Second Region -->

            <!-- Start Bottom third Region -->          
            ";
                // line 258
                if ($this->getAttribute(($context["page"] ?? null), "bottom_third", array())) {
                    // line 259
                    echo "              <div class = ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                    echo ">
                ";
                    // line 260
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_third", array()), "html", null, true));
                    echo "
              </div>
            ";
                }
                // line 262
                echo "          
            <!-- End Bottom Third Region -->

            ";
                // line 265
                if ($this->getAttribute(($context["page"] ?? null), "bottom_forth", array())) {
                    // line 266
                    echo "            <div class = ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["bottom_class"] ?? null), "html", null, true));
                    echo ">
              ";
                    // line 267
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "bottom_forth", array()), "html", null, true));
                    echo "
            </div>
            ";
                }
                // line 270
                echo "
          </div>
        </div>
      </div>
    ";
            }
            // line 275
            echo "  ";
        }
        // line 276
        echo "  <!--End Bottom -->


  <!-- Start Footer Menu -->
  ";
        // line 280
        if ($this->getAttribute(($context["page"] ?? null), "footer_menu", array())) {
            // line 281
            echo "    <div class=\"footer-menu\">
      <div class=\"container-sub\">
        <div class=\"row-sub clearfix\">
          <div class=\"col-sm-6\">
            ";
            // line 285
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "footer_menu", array()), "html", null, true));
            echo "
          </div>
          ";
            // line 287
            if (($context["show_social_icon"] ?? null)) {
                // line 288
                echo "          <div class=\"col-sm-6\">
            <div class=\"social-media\">
              ";
                // line 290
                if (($context["facebook_url"] ?? null)) {
                    // line 291
                    echo "                <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["facebook_url"] ?? null), "html", null, true));
                    echo "\"  class=\"facebook\" target=\"_blank\" ><i class=\"fa fa-facebook\"></i></a>
              ";
                }
                // line 293
                echo "              ";
                if (($context["google_plus_url"] ?? null)) {
                    // line 294
                    echo "                <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["google_plus_url"] ?? null), "html", null, true));
                    echo "\"  class=\"google-plus\" target=\"_blank\" ><i class=\"fa fa-google-plus\"></i></a>
              ";
                }
                // line 296
                echo "              ";
                if (($context["twitter_url"] ?? null)) {
                    // line 297
                    echo "                <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["twitter_url"] ?? null), "html", null, true));
                    echo "\" class=\"twitter\" target=\"_blank\" ><i class=\"fa fa-twitter\"></i></a>
              ";
                }
                // line 299
                echo "              ";
                if (($context["linkedin_url"] ?? null)) {
                    // line 300
                    echo "                <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["linkedin_url"] ?? null), "html", null, true));
                    echo "\" class=\"linkedin\" target=\"_blank\"><i class=\"fa fa-linkedin\"></i></a>
              ";
                }
                // line 302
                echo "              ";
                if (($context["pinterest_url"] ?? null)) {
                    // line 303
                    echo "                <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["pinterest_url"] ?? null), "html", null, true));
                    echo "\" class=\"pinterest\" target=\"_blank\" ><i class=\"fa fa-pinterest\"></i></a>
              ";
                }
                // line 305
                echo "              ";
                if (($context["rss_url"] ?? null)) {
                    // line 306
                    echo "                <a href=\"";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["rss_url"] ?? null), "html", null, true));
                    echo "\" class=\"rss\" target=\"_blank\" ><i class=\"fa fa-rss\"></i></a>
              ";
                }
                // line 308
                echo "            </div>
          </div>
          ";
            }
            // line 311
            echo "        </div>
      </div>
    </div>
  ";
        }
        // line 315
        echo "  <!-- End Footer Menu -->

  <div class=\"copyright\">
    <div class=\"container-sub\">
      <div class=\"row-sub clearfix\">

        <!-- Copyright -->
        <div class=\"col-sm-6\">
          <p class=\"copyright\">Copyright © ";
        // line 323
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, twig_date_format_filter($this->env, "now", "Y"), "html", null, true));
        echo ". All rights reserved</p>
        </div>
        <!-- End Copyright -->

        <!-- Credit link -->
        ";
        // line 328
        if (($context["show_credit_link"] ?? null)) {
            // line 329
            echo "          <div class=\"col-sm-6\">
            <p class=\"credit-link\">Designed By <a href=\"http://www.zymphonies.com\" target=\"_blank\">Zymphonies</a></p>
          </div>
        ";
        }
        // line 333
        echo "        <!-- End Credit link -->
        
      </div>
    </div>
  </div>

</div>


";
    }

    public function getTemplateName()
    {
        return "themes/drupal8_custom_theme/templates/layout/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  559 => 333,  553 => 329,  551 => 328,  543 => 323,  533 => 315,  527 => 311,  522 => 308,  516 => 306,  513 => 305,  507 => 303,  504 => 302,  498 => 300,  495 => 299,  489 => 297,  486 => 296,  480 => 294,  477 => 293,  471 => 291,  469 => 290,  465 => 288,  463 => 287,  458 => 285,  452 => 281,  450 => 280,  444 => 276,  441 => 275,  434 => 270,  428 => 267,  423 => 266,  421 => 265,  416 => 262,  410 => 260,  405 => 259,  403 => 258,  397 => 254,  391 => 252,  386 => 251,  384 => 250,  378 => 246,  372 => 244,  367 => 243,  365 => 242,  358 => 237,  356 => 236,  352 => 235,  346 => 231,  340 => 228,  337 => 227,  335 => 226,  329 => 222,  322 => 217,  316 => 214,  313 => 213,  311 => 212,  303 => 206,  296 => 202,  292 => 201,  289 => 200,  287 => 199,  282 => 196,  275 => 192,  271 => 191,  268 => 190,  266 => 189,  261 => 186,  254 => 182,  250 => 181,  247 => 180,  245 => 179,  239 => 175,  233 => 172,  230 => 171,  228 => 170,  220 => 164,  213 => 160,  209 => 158,  207 => 157,  202 => 154,  200 => 153,  194 => 149,  186 => 144,  180 => 140,  178 => 139,  173 => 136,  165 => 131,  160 => 128,  158 => 127,  153 => 124,  148 => 121,  139 => 119,  135 => 118,  131 => 116,  129 => 115,  119 => 107,  113 => 104,  108 => 102,  97 => 93,  91 => 91,  89 => 90,  81 => 84,  75 => 82,  73 => 81,  67 => 77,  61 => 75,  59 => 74,  43 => 60,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "themes/drupal8_custom_theme/templates/layout/page.html.twig", "C:\\xampp\\htdocs\\hackaholics\\themes\\drupal8_custom_theme\\templates\\layout\\page.html.twig");
    }
}
