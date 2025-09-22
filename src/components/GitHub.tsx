import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Github, Star, GitFork, ExternalLink, Calendar } from 'lucide-react';
import { GitHubRepo } from '../types';

const GitHub: React.FC = () => {
  const { ref, isInView } = useInView();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const githubUsername = 'ashishraj875718-jpg';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError('Failed to load repositories');
        // Fallback data for demo
        setRepos([
          {
            id: 1,
            name: 'portfolio-website',
            description: 'My personal portfolio website built with React and modern web technologies',
            html_url: 'https://github.com/ashishraj875718-jpg',
            stargazers_count: 12,
            forks_count: 3,
            language: 'React',
            topics: ['portfolio', 'react', 'typescript'],
            updated_at: '2024-01-15T10:30:00Z',
          },
          {
            id: 2,
            name: 'qrify-horeca',
            description: 'QR-based restaurant ordering system - Winner of HackTheFuture1.0',
            html_url: 'https://github.com/ashishraj875718-jpg',
            stargazers_count: 25,
            forks_count: 8,
            language: 'JavaScript',
            topics: ['hackathon', 'qr-code', 'restaurant'],
            updated_at: '2024-01-10T15:45:00Z',
          },
          {
            id: 3,
            name: 'street-stylings-ecommerce',
            description: 'Full-stack e-commerce platform for fashion products',
            html_url: 'https://github.com/ashishraj875718-jpg',
            stargazers_count: 8,
            forks_count: 2,
            language: 'React',
            topics: ['ecommerce', 'fashion', 'full-stack'],
            updated_at: '2024-01-20T09:15:00Z',
          },
        ] as GitHubRepo[]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      React: '#61dafb',
      Python: '#3776ab',
      'C++': '#00599c',
      HTML: '#e34f26',
      CSS: '#1572b6',
    };
    return colors[language] || '#6b7280';
  };

  return (
    <section id="github" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Github size={40} className="text-gray-900 dark:text-white" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                GitHub Repositories
              </h2>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore my latest projects and contributions on GitHub. Here are some of my most recent repositories.
            </p>
          </motion.div>

          {/* GitHub Profile Link */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
            >
              <Github size={20} />
              View Full GitHub Profile
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>

          {/* Repository Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading repositories...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
              <p className="text-gray-600 dark:text-gray-400">Showing demo repositories instead</p>
            </div>
          ) : null}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Github size={20} className="text-blue-600" />
                    <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <motion.a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>

                {/* Topics */}
                {repo.topics && repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Stats and Language */}
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-4">
                    {repo.language && (
                      <div className="flex items-center gap-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        ></div>
                        <span>{repo.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{repo.forks_count}</span>
                    </div>
                  </div>
                </div>

                {/* Updated Date */}
                <div className="flex items-center gap-1 mt-3 text-xs text-gray-500 dark:text-gray-500">
                  <Calendar size={12} />
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Stats */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold text-blue-600 mb-2">50+</h4>
                <p className="text-gray-600 dark:text-gray-400">Commits This Year</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold text-green-600 mb-2">10+</h4>
                <p className="text-gray-600 dark:text-gray-400">Public Repositories</p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                <h4 className="text-2xl font-bold text-purple-600 mb-2">5+</h4>
                <p className="text-gray-600 dark:text-gray-400">Programming Languages</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;