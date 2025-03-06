import { Metadata } from "next";
import TextContainer from "@/components/TextContainer";

export const metadata: Metadata = {
  title: "CV | Max Afteniy",
  description: "Curriculum Vitae of Max Afteniy",
};

export default function CVPage() {
  return (
    <div className="container max-w-4xl py-12">
      <TextContainer className="p-8 rounded-3xl">
        <h1 className="text-4xl font-bold mb-8">Curriculum Vitae</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-lg">
            Skillful Machine Learning and AI specialist with over four years of experience solving
            complex real-world problems using the latest Deep Learning technologies. I am used
            to working efficiently in cross-functional teams following clean code practices and test-driven
            development, resulting in a technical debt free and extensible end product. I
            am eager to humbly learn everyday novel technologies/approaches and teach others as
            well. I enjoy spending my time studying and re-implementing, exciting research in AI,
            Machine Learning and Data Science.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Aalto University, Finland</h3>
              <p className="font-medium">M.Sc, Machine Learning, Data Science and Artificial Intelligence, April 2021</p>
              <p className="mt-1">
                <span className="font-medium">Thesis:</span>{" "}
                <a href="#" className="text-primary hover:underline">Predicting time series with Transformer</a>
              </p>
              <p className="mt-1">
                <span className="font-medium">Focus areas:</span> Multi-agent Reinforcement learning, Computer Vision, Efficient Transformers and Bayesian Inference methods.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Aalto University, Finland</h3>
              <p className="font-medium">B.Sc, Computer Science, Sep 2015 - May 2018</p>
              <p className="mt-1">
                <span className="font-medium">Thesis:</span>{" "}
                <a href="#" className="text-primary hover:underline">Gradient-based Deep Reinforcement Learning</a> (Applying Q-learning and diving deep into the update formulas)
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Machine Learning Engineer</h3>
                <div className="text-right">
                  <p className="font-medium">Apple</p>
                  <p className="text-muted-foreground">Barcelona, Spain</p>
                </div>
              </div>
              <p className="text-muted-foreground">Jun 2022 - Oct 2024</p>
              <p className="mt-2">
                Enhanced ML pipeline efficiency, reducing task completion time from weeks to hours by
                migrating to PySpark. Contributed to NLP and ML models, enhancing Language Understanding and consequently improving user experience. Collaborated cross-functionally
                to implement solutions, playing a key role in advancing Siri functionality, especially for
                the Finnish locale.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Machine Learning Engineer</h3>
                <div className="text-right">
                  <p className="font-medium">LaDiMo Oy</p>
                  <p className="text-muted-foreground">Espoo, Finland</p>
                </div>
              </div>
              <p className="text-muted-foreground">Jan 2021 - Feb 2022</p>
              <p className="mt-2">
                As a solo ML Engineer led E2E Deep Learning R&D work for real-time 3D sensor
                (training data processing, prototyping, model training, deployment for inference) use
                cases, tasks included: 3D point-cloud semantic segmentation, Sim2Real domain adaptation and deployment to C++/CUDA pipeline via TensorRT to a mobile Jetson device.
                Key focus areas were Deep Learning with PyTorch, depth-image based Semantic segmentation, and a real-world domain adaptation.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Machine Learning Trainee</h3>
                <div className="text-right">
                  <p className="font-medium">Nokia Oyj</p>
                  <p className="text-muted-foreground">Espoo, Finland</p>
                </div>
              </div>
              <p className="text-muted-foreground">Jan 2020 - Jun 2020</p>
              <p className="mt-2">
                Tasks included research in Federated Learning/Quantization and implementation of
                the state-of-the-art (at the time) algorithm for Deep Learning based Unsupervised
                Classification (SCAN) with Contrastive Learning.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Deep Learning Course Assistant</h3>
                <div className="text-right">
                  <p className="font-medium">Aalto University</p>
                  <p className="text-muted-foreground">Espoo, Finland</p>
                </div>
              </div>
              <p className="text-muted-foreground">Sep 2020 - Dec 2020</p>
              <p className="mt-2">
                Teaching assistant for an introductory level Deep Learning course.
                Key areas were mostly helping students with their weekly questions during the class.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">AI Research Trainee</h3>
                <div className="text-right">
                  <p className="font-medium">Nokia Bell Labs</p>
                  <p className="text-muted-foreground">Espoo, Finland</p>
                </div>
              </div>
              <p className="text-muted-foreground">Jun 2019 - Aug 2019</p>
              <p className="mt-2">
                5G standardization research included: Deep Reinforcement Learning with Deep Contextual Bandits in Multi-Agent setting to optimize 5G telecommunications.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Machine Learning Course Assistant</h3>
                <div className="text-right">
                  <p className="font-medium">Aalto University</p>
                  <p className="text-muted-foreground">Espoo, Finland</p>
                </div>
              </div>
              <p className="text-muted-foreground">Sep 2018 - Dec 2018</p>
              <p className="mt-2">
                Teaching Assistant a Machine Learning: Basic Principles course.
                Responsibilities included guiding students in their doubts about classical ML principles.
                Over 400 active course participants.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-medium">Full Stack Developer</h3>
                <div className="text-right">
                  <p className="font-medium">Vuolearning Oy</p>
                  <p className="text-muted-foreground">Espoo, Finland</p>
                </div>
              </div>
              <p className="text-muted-foreground">May 2017 - Aug 2018</p>
              <p className="mt-2">
                Full Stack Developer in a growing startup. Due to shortage of employees, singlehandedly
                migrated whole website to React from Angular 1 (without prior Angular knowledge),
                added new features like user chat and custom layout arrangement. Stack used: React.js,
                Node.js and MySQL.
              </p>
            </div>
          </div>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-medium">Theoretical</h3>
              <p>Deep Reinforcement Learning, Contrastive Learning, Variational Inference, Bayesian Methods, Test Driven Development, Multivariate Time-Series Forecasting, LLM Fine-Tuning</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Technical</h3>
              <p>PyTorch, C/C++, TensorFlow/Keras, CUDA, OpenCV, Unix, Docker, AWS/Google Cloud, Java/Scala, PySpark, CI/CD, Bash</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">Languages</h3>
              <p>English (excellent), Finnish (native), Russian (native), Spanish (B1)</p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Download CV</h2>
          <p>
            You can download a PDF version of my CV{" "}
            <a href="/cv.pdf" className="text-primary underline hover:no-underline">
              here
            </a>
            .
          </p>
        </section>
      </TextContainer>
    </div>
  );
} 